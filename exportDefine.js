const SequelizeAuto = require('sequelize-auto');
const path = require('path');
module.exports = function (dbConfig, callback) {
    let process = new SequelizeAuto(dbConfig.database_name, dbConfig.username, dbConfig.password, {
        host: dbConfig.host,
        port: dbConfig.port,
        dialect: dbConfig.dialect,
        directory: path.join(__dirname, 'database_defination', dbConfig.database_name),
        additional: {
            timestamp: true
        },
        logging: false
        // tables: ['project','well','dataset']
    });

    process.run(function (err) {
        if (err) {
            callback(err, null);
        } else {
            callback(null, dbConfig.database_name);
        }
    });
}

