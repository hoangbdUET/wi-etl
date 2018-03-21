let path = require('path');
let fs = require('fs');
let syncConfig = require('./sync-config/sync.config.json');
let assosiation = require(path.join(__dirname, 'sync-config', syncConfig.assosiationFunction))
let object = {};
let async = require('async');
const Sequelize = require('sequelize');


String.prototype.underscore2PascalCase = function () {
    let self = this;
    self = self.replace(/_([a-z])/g, function (g) {
        return g[1].toUpperCase();
    });
    return self.charAt(0).toUpperCase() + self.slice(1);
};

function appendToFile(filePath, searchString, appendText, callback) {
    let content = fs.readFileSync(filePath).toString();
    let position = content.indexOf(searchString);
    if (content.indexOf(appendText) != -1) return callback();
    if (position != -1) {
        position = position + searchString.length;
        content = content.substring(position);
        let file = fs.openSync(filePath, 'r+');
        let bufferedText = new Buffer(appendText + content);
        fs.writeSync(file, bufferedText, 0, bufferedText.length, position);
        fs.closeSync(file);
        callback();
    } else {
        console.log("Not found ", searchString);
        callback();
    }
}

function prepareBeforeImport(sourceDbName, callback) {
    let files = [];
    async.each(fs.readdirSync(path.join(__dirname, 'database_defination', sourceDbName))
        .filter(function (file) {
            return (file.indexOf('.') !== 0) && (file.slice(-3) === '.js');
        }), function (file, nextFile) {
        let filePath = path.join(__dirname, 'database_defination', sourceDbName, file);
        let tableName = file.substring(0, file.length - 3);
        async.series([
            function (cb) {
                async.each(syncConfig.uniqueConstraint, function (u, next) {
                    if (u.table === tableName) {
                        appendToFile(filePath, u.column + ": {", "\n\t\t\tunique: " + "\"" + u.condition + "\",", function () {
                            next();
                        });
                    } else {
                        next();
                    }
                }, function () {
                    cb();
                });
            },
            function (cb) {
                async.each(syncConfig.paranoidTable, function (table, next) {
                    if (table === tableName) {
                        appendToFile(filePath, "tableName: '" + table + "'", ",\n\t\tparanoid: true", function () {
                            next();
                        });
                    } else {
                        next();
                    }
                }, function () {
                    cb();
                });
            }
        ], function () {
            files.push(file);
            nextFile();
        });
    }, function () {
        callback(files);
    })
}

module.exports = function (dbConfig, callback) {
    let tables = [];
    prepareBeforeImport(dbConfig.source_database, function (files) {
        const sequelize = new Sequelize(dbConfig.database_name, dbConfig.username, dbConfig.password, {
            host: dbConfig.host,
            port: dbConfig.port,
            dialect: dbConfig.dialect,
            pool: {
                max: 5,
                min: 0,
                acquire: 30000,
                idle: 10000
            },
            logging: false,
            define: {
                freezeTableName: true
            },
            dialectOptions: {
                charset: 'utf8'
            },
            paranoid: true,
            operatorsAliases: Sequelize.Op,
        });
        sequelize.sync().catch(err => {
            console.log(err);
        });
        async.each(files, function (file, nextFile) {
            let model = sequelize['import'](path.join(__dirname, 'database_defination', dbConfig.source_database, file));
            object[model.name.underscore2PascalCase()] = model;
            tables.push(file.substring(0, file.length - 3));
            nextFile();
        }, function () {
            assosiation(object);
            object.sequelize = sequelize;
            object.tables = tables;
            callback(object);
        });
    });
};
