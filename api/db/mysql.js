const mysql = require('mysql');
const config = require('../config');
const pool = mysql.createPool(config.db_config);

var getConnection = function (callback) {
    pool.getConnection(function (err, connection) {
        if (err) {
            console.log("error occured connecting database", err);
            // callback(err, null);
        }
        else {
            console.log("connected to database successfully");
            callback(err, connection);
        }
    });
};

module.exports = getConnection;