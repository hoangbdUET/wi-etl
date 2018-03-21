let exportDbDefine = require('./exportDefine');
let importDbDefine = require('./importDefine');
let dataDump = require('./dataDump');
main();

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

function main() {
    let source_database = {
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'qwertyui',
        database_name: 'wi_hoang',
        dialect: 'mysql'
    };
    let destination_database = {
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'qwertyui',
        database_name: 'wi_test',
        dialect: 'mysql',
        source_database: source_database.database_name
    };
    exportDatabaseDefinition(source_database, function (err, success) {
        if (err) {
            console.log("Error : ", err);
        } else {
            console.log("Start generate database ", destination_database.database_name, " from ", source_database.database_name);
            importDatabaseDefination(destination_database, function (model) {
                model.sequelize.authenticate().then(() => {
                    setTimeout(function () {
                        exportSourceDatabase(source_database, {tables: model.tables}, function (err, dataPath) {
                            if (err) {
                                console.log(err);
                            } else {
                                importDestinationDatabase(destination_database, {
                                    source_path: dataPath,
                                    tables: model.tables
                                }, function (err, success) {
                                    if (err) {
                                        console.log("=============", err);
                                    } else {
                                        console.log("Done all!");
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