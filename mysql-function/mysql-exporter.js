let async = require('async');
let mqNode = require('mq-node');
let _ = require('lodash');
let fs = require('fs');
let mysql;

let extend = function (obj) {
    for (let i = 1; i < arguments.length; i++) for (let key in arguments[i]) obj[key] = arguments[i][key];
    return obj;
};

let typeCastOptions = {
    typeCast: function (field, next) {
        if (field.type === "GEOMETRY") {
            let offset = field.parser._offset;
            let buffer = field.buffer();
            field.parser._offset = offset;
            let result = field.geometry();
            annotateWkbTypes(result, buffer, 4);
            return result;
        }
        return next();
    }
};

let annotateWkbTypes = function (geometry, buffer, offset) {

    if (!buffer) return offset;

    let byteOrder = buffer.readUInt8(offset);
    offset += 1;
    let ignorePoints = function (count) {
        offset += count * 16;
    };
    let readInt = function () {
        let result = byteOrder ? buffer.readUInt32LE(offset) : buffer.readUInt32BE(offset);
        offset += 4;
        return result;
    };

    geometry._wkbType = readInt();

    if (geometry._wkbType === 1) {
        ignorePoints(1);
    } else if (geometry._wkbType === 2) {
        ignorePoints(readInt());
    } else if (geometry._wkbType === 3) {
        let rings = readInt();
        for (let i = 0; i < rings; i++) {
            ignorePoints(readInt());
        }
    } else if (geometry._wkbType === 7) {
        let elements = readInt();
        for (let i = 0; i < elements; i++) {
            offset = annotateWkbTypes(geometry[i], buffer, offset);
        }
    }
    return offset
};

let escapeGeometryType = function (val) {

    let constructors = {
        1: "POINT",
        2: "LINESTRING",
        3: "POLYGON",
        4: "MULTIPOINT",
        5: "MULTILINESTRING",
        6: "MULTIPOLYGON",
        7: "GEOMETRYCOLLECTION"
    };

    let isPointType = function (val) {
        return val && typeof val.x === 'number' && typeof val.y === 'number';
    };
    let close = function (str) {
        return str.length && str[0] === '(' ? str : '(' + str + ')';
    };

    function escape(val) {

        let result = isPointType(val) ? (val.x + " " + val.y) :
            "(" + val.map(escape).join(',') + ")";
        if (val._wkbType) {
            result = constructors[val._wkbType] + close(result);
        }
        return result;
    }

    return "GeomFromText('" + escape(val) + "')";
};

let isset = function () {
    let a = arguments;
    let l = a.length;
    let i = 0;
    let undef;

    if (l === 0) throw new Error('Empty isset');

    while (i !== l) {
        if (a[i] === undef || a[i] === null) return false;
        ++i;
    }
    return true;
};

let buildInsert = function (rows, table, cols) {
    cols = _.keys(rows[0]);
    let sql = [];
    for (let i in rows) {
        let values = [];
        for (let k in rows[i]) {
            if (typeof rows[i][k] === 'function') continue;
            if (!isset(rows[i][k])) {
                if (rows[i][k] == null) {
                    values.push("NULL");
                } else {
                    values.push(" ");
                }
            } else if (rows[i][k] !== '') {

                if (rows[i][k]._wkbType) {
                    let geometry = escapeGeometryType(rows[i][k]);
                    values.push(geometry);
                } else if (typeof rows[i][k] === 'number') {
                    values.push(rows[i][k]);
                } else {
                    values.push(mysql.escape(rows[i][k]));
                }
            } else {
                values.push("''");
            }
        }
        sql.push("INSERT INTO `" + table + "` (`" + cols.join("`,`") + "`) VALUES (" + values.join() + ");");
    }
    return sql.join('\n');
};

module.exports = function (options, done) {
    let defaultConnection = {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'test',
        charset: 'UTF8_GENERAL_CI',
    };

    let defaultOptions = {
        tables: null,
        schema: true,
        data: true,
        ifNotExist: true,
        autoIncrement: true,
        dropTable: false,
        getDump: false,
        // dest:'./data.sql',
        disableForeignKeyChecks: false,
        where: null
    };

    mysql = mqNode(extend({}, defaultConnection, {
        host: options.host,
        user: options.user,
        password: options.password,
        database: options.database,
        port: options.port,
        charset: options.charset,
        socketPath: options.socketPath,
    }));

    options = extend({}, defaultConnection, defaultOptions, options);
    if (!options.database) throw new Error('Database not specified');
    async.auto({
        getTables: function (callback) {
            if (!options.tables || !options.tables.length) { // if not especifed, get all
                mysql.query("SHOW TABLES FROM `" + options.database + "`", function (err, data) {
                    if (err) return callback(err);
                    let resp = [];
                    for (let i = 0; i < data.length; i++) resp.push(data[i]['Tables_in_' + options.database.toLowerCase()]);
                    callback(err, resp);
                });
            } else {
                callback(null, options.tables);
            }
        },
        createSchemaDump: ['getTables', function (results, callback) {
            if (!options.schema) {
                callback();
                return;
            }
            let run = [];
            results.getTables.forEach(function (table) {
                run.push(function (callback) {
                    mysql.query("SHOW CREATE TABLE `" + table + "`", callback);
                });
            });
            async.parallel(run, function (err, data) {
                if (err) return callback(err);
                let resp = [];
                for (let i in data) {
                    let r = data[i][0]['Create Table'] + ";";

                    if (options.disableForeignKeyChecks) r = "SET foreign_key_checks = 0;\n" + r;
                    if (options.dropTable) r = r.replace(/CREATE TABLE `/, 'DROP TABLE IF EXISTS `' + data[i][0]['Table'] + '`;\nCREATE TABLE `');
                    if (options.ifNotExist) r = r.replace(/CREATE TABLE `/, 'CREATE TABLE IF NOT EXISTS `');
                    if (!options.autoIncrement) r = r.replace(/AUTO_INCREMENT=\d+ /g, '');
                    resp.push(r)
                }
                callback(err, resp);
            });
        }],
        createDataDump: ['createSchemaDump', function (results, callback) {
            let tbls = [];
            if (options.data) {
                tbls = results.getTables; // get data for all tables
            } else if (options.where) {
                tbls = Object.keys(options.where); // get data for tables with a where specified
            } else {
                callback();
                return;
            }
            let run = [];
            _.each(tbls, function (table) {
                run.push(function (callback) {
                    let opts = {cols: '*', from: "`" + table + "`"};
                    if ((options.where != null) && (typeof options.where[table] !== 'undefined')) {
                        opts.where = options.where[table];
                    }
                    mysql.select(opts, function (err, data) {
                        if (err) return callback(err);
                        callback(err, buildInsert(data, table));
                    }, typeCastOptions);
                });
            });
            async.parallel(run, callback)
        }],
        getDataDump: ['createSchemaDump', 'createDataDump', function (results, callback) {
            if (!results.createSchemaDump || !results.createSchemaDump.length) results.createSchemaDump = [];
            if (!results.createDataDump || !results.createDataDump.length) results.createDataDump = [];
            callback(null, results.createSchemaDump.concat(results.createDataDump).join("\n\n"));
        }]
    }, function (err, results) {
        if (err) return done(err);

        mysql.connection.end();
        if (options.getDump) return done(err, results.getDataDump);
        if ((options.getDump && !options.dest) || options.dest) {
            fs.writeFile(options.dest || './data.sql', results.getDataDump, done);
        }
    });
};
