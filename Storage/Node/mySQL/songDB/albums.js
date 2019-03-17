var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Collegebum1",
  database: "top_albums"
});

// connect to the mysql server and sql database
connection.connect(function(err) {
  if (err) throw err;
  // run the start function after the connection is made to prompt the user
  console.log("connected as " + connection.threadId);
  start();
});

function start() {
  inquirer
    .prompt({
      name: "whatToDo",
      type: "list",
      message: "What would you like to query?",
      choices: ["ALBUM", "ARTIST", "REGION", "EXIT"]
    })
    .then(function(answer) {
      if (answer.whatToDo === "ALBUM") {
        findAlbum();
      } else if (answer.whatToDo === "ARTIST") {
        findArtist();
      } else if (answer.whatToDo === "REGION") {
        findRegion();
      } else {
        connection.end();
      }
    });
}

function findArtist(){
    inquirer
        .prompt({
            name: "queryArtist",
            type: "input",
            message: "Who would you like to search for?"
        })
        .then(function(answer){
        var query = connection.query("SELECT * FROM albums WHERE artist=?", [answer.queryArtist.trim()], function(err, res){
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].album + " | " + res[i].artist + " | " + res[i].year);
    }
    });

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
})};

function findAlbum() {
    inquirer
        .prompt({
            name: "queryAlbum",
            type: "input",
            message: "What album would you like to find?"
        })
        .then(function(answer) {
        var query = connection.query("SELECT * FROM albums WHERE album=?", [answer.queryAlbum.trim()], function(err, res){
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].artist + " | " + res[i].year)
        }
        });

        //log actual query being run
        // console.log(query.sql);
        connection.end();
        })
}

function findRegion() {
    inquirer
        .prompt({
            name: "queryRegion",
            type: "input",
            message: "what region are you interested in?",
            choices: ["WORLD", "US", "UK", "EUROPE", "EVERYONE ELSE"]
        })
        .then(function(answer) {
            if (answer.queryRegion === "WORLD") {
                queryWorld();
            } else if (answer.queryRegion === "US") {
                queryUS();
            } else if (answer.queryRegion == "UK") {
                queryUK();
            } else if (answer.queryRegion == "EUROPE") {
                queryEURO();
            } else {
                queryElse();
            }
        })
}  