var Sequelize = require('sequelize');

var attributes = 
{
    oauth_id:
    {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
    name:
    {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false
    },
/*    username: 
    {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate:{ is: /^[a-z0-9\_\-]+$/i }
    },*/
    email:
    {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
        validate:
        {
                isEmail: true
        }
    },
    created:
    {
        type: Sequelize.DATE,
        allowNull: false,
        unique: false
    }
}

/*
// create a user model
var User = pg.model('User', {
  oauthID: Number,
  name: String,
  created: Date
});

module.exports = User;
*/


var options = 
{
    freezeTableName: true,
    timestamps: false
}

module.exports.attributes = attributes;
module.exports.options = options;
