let exportDbDefine = require('./exportDefine');
let importDbDefine = require('./importDefine');
let dataDump = require('./dataDump');

let sourceDb = {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'qwertyui',
    database_name: 'wi_hoang',
    dialect: 'mysql'
};
let destinationDb = {
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'qwertyui',
    database_name: 'wi_test',
    dialect: 'mysql',
    source_database: sourceDb.database_name
};

function configSourceDb(config, callback) {
    sourceDb = config;
    callback();
}

function configDestinationDb(config, callback) {
    destinationDb = config;
    callback();
}

function exportDatabaseDefinition(dbConfig, callback) {
    exportDbDefine(dbConfig, function (err, success) {
        if (err) {
            console.log("Export database defination failed : ", err);
            callback(err, null);
        } else {
            console.log("Successfull export database defination : ", success);
            callback(null, success);
        }
    });
}

function importDatabaseDefination(dbConfig, callback) {
    importDbDefine(dbConfig, callback);
}

function exportSourceDatabase(dbConfig, options, callback) {
    dataDump.exportDatabase(dbConfig, options, callback)
}

function importDestinationDatabase(dbConfig, options, callback) {
    dataDump.importDatabase(dbConfig, options, callback);
}

function executeJob(tablesQueue, callback) {
    exportDatabaseDefinition(sourceDb, function (err, success) {
        if (err) {
            console.log("Error : ", err);
        } else {
            console.log("Start generate database ", destinationDb.database_name, " from ", sourceDb.database_name);
            importDatabaseDefination(destinationDb, function (model) {
                model.sequelize.authenticate().then(() => {
                    setTimeout(function () {
                        exportSourceDatabase(sourceDb, {tables: tablesQueue || model.tables}, function (err, dataPath) {
                            if (err) {
                                console.log(err);
                            } else {
                                importDestinationDatabase(destinationDb, {
                                    source_path: dataPath,
                                    tables: model.tables
                                }, function (err, success) {
                                    if (err) {
                                        console.log("=============", err);
                                    } else {
                                        console.log("Done all!");
                                        callback();
                                    }
                                })
                            }
                        });
                    }, 3000)
                }).catch(err => {
                    console.log(err);
                });
            });
        }
    });
}

module.exports = {
    configSourceDb: configSourceDb,
    configDestinationDb: configDestinationDb,
    executeJob: executeJob
};