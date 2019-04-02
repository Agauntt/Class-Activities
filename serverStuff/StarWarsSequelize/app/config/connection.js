// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var Sequelize = require('sequelize');

// Setting up our connection information
var sequelize = new Sequelize("starwars", "root", "Collegebum1", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 1000
  }
});


// Exporting our connection
module.exports = sequelize;
