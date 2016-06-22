var UserData = require('./users.js');
var connection = require('../sequelize.js');

var Users = connection.define('users', UserData.attributes, UserData.options);

module.exports.Users = Users;
//module.exports.Index = Index;
