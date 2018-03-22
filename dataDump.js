const mysqlDump = require('./mysql-function/mysql-exporter');
const importer = require('./mysql-function/mysql-importer');
const path = require('path');
const fs = require('fs');

function exportDatabase(dbConfig, options, callback) {
    let time = Date.now();
    if (!fs.existsSync(path.join(__dirname, 'database_export'))) {
        fs.mkdirSync(path.join(__dirname, 'database_export'));
    }
    let databasePath = path.join(__dirname, 'database_export', dbConfig.database_name + "_" + time + '.sql');
    mysqlDump({
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database_name,
        tables: options.tables, // only these tables
        // tables: ['family', 'family_spec', 'family_condition', 'project', 'well', 'dataset', 'curve', 'plot', 'histogram', 'cross_plot'],
        // where: {'family': "createdAt > '2018-03-04 14:39:16.000'",'family_condition': "createdAt > '2018-03-04 14:39:16.000'"},
        // where: {'project': "idProject = 1"},
        ifNotExist: true, // Create table if not exist
        disableForeignKeyChecks: false, //Adds SET foreign_key_checks = 0; at the file begin
        dest: databasePath // destination file
    }, function (err) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, databasePath);
        }
    });
}

function importDatabase(dbConfig, options, callback) {
    importer.config({
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.username,
        password: dbConfig.password,
        database: dbConfig.database_name,
        logging: false
    });
    importer.importSQL(options.source_path).then(() => {
        console.log('All statements have been executed');
        // fs.unlinkSync(options.source_path);
        callback(null, dbConfig.database_name);
    }).catch(err => {
        console.log("===", err);
        callback(err, null);
    })
}

module.exports = {
    exportDatabase: exportDatabase,
    importDatabase: importDatabase
};