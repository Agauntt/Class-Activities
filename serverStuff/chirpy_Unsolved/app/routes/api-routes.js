// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");


// Routes
// =============================================================
module.exports = function(app) {
  // Get all chirps
  app.get("/api/all", function(req, res) {
    var DbQuery = "SELECT * FROM chirps";
  })
  

  // Add a chirp
  

};
