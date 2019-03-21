var express = require("express");
var mysql = require("mysql");


var app = express();
var PORT = 3000;

var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Collegebum1",
    database: "seinfeld_db"
  });

  connection.connect(function(err) {
      if (err) throw err;
  })


app.get("/characters", function(req, res){
    // res.send("attempting character list");
    res.send()
});








// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  