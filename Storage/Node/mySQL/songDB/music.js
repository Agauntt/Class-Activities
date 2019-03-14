var mysql = require('mysql');
var inquirer = require('inquirer');

// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Collegebum1",
  database: "top_songs"
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
            choices: ["SONG", "ARTIST", "REGION", "EXIT"]
        })
        .then(function(answer) {
            if (answer.whatToDo === "SONG") {
                findSong();
            } else if (answer.whatToDo === "ARTIST") {
                findArtist();
            } else if (answer.whatToDo === "REGION"){
                findRegion();
            }           else {
                    connection.end();
            }
        })
}


function findArtist(){
    inquirer
        .prompt({
            name: "queryArtist",
            type: "input",
            message: "Who would you like to search for?"
        })
        .then(function(answer){
        var query = connection.query("SELECT * FROM top5000 WHERE artist_name=?", [answer.queryArtist.trim()], function(err, res){
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].song_name + " | " + res[i].artist_name);
    }
    });

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
})};
