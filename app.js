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

let tables = ['family', 'family_spec', 'family_condition', 'project', 'well', 'dataset', 'curve', 'plot', 'cross_plot', 'histogram', 'combined_box', 'annotation', 'depth_axis', 'groups', 'image_track', 'zone_track', 'track', 'object_track', 'image_of_track', 'object_of_track', 'reference_curve', 'marker', 'zone_set', 'zone_track', 'workflow_spec', 'workflow', 'well_header', 'point_set', 'polygon', 'regression_line', 'ternary', 'line', 'shading', 'polygon_regressionline', 'overlay_line', 'combined_box_crossplot', 'combined_box_histogram', 'combined_box_plot', 'combined_box_tool', 'selection_tool', 'user_define_line', 'image'];

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
                        exportSourceDatabase(source_database, {tables: tables || model.tables}, function (err, dataPath) {
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