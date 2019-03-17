var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Collegebum1",
  database: "ice_creamDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  connection.end();
});

connection.query("select * from products", 
  function (error, results) {
    if(error) throw error;

    console.log(results[0].flavor);
    connection.end();
  });

