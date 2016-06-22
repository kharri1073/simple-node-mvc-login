var config = require('./config.js')[env].postgres;
var db_string = "postgres://"+config.username+":"+config.password+"@"+config.host+"/"+config.database;

var Sequelize = require('sequelize');
var sequelize = new Sequelize(db_string, {
        logging: (process.env.NODE_ENV !== 'production' ? console.log : false)
    });

module.exports = sequelize;
