var Sequelize = require('sequelize');
var sequelize = require('../config/connection.js')

var Character = sequelize.define("character", {
    routeName: Sequelize.STRING,
    name: Sequelize.STRING,
    role: Sequelize.STRING,
    age: Sequelize.INTEGER,
    forcePoints: Sequelize.INTEGER
});

Character.sync();

module.exports = Character;