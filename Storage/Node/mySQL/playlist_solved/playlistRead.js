var mysql = require("mysql");

var operator = process.argv[2];
var selection = process.argv[3];

var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Collegebum1",
  database: "playlistDB"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId);
  queryAllSongs();
  queryDanceSongs();
  // addDance();
});

function queryAllSongs() {
  connection.query("SELECT * FROM songs", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
    console.log("-----------------------------------");
  });
}

function queryDanceSongs() {
  var query = connection.query("SELECT * FROM songs WHERE genre=?", ["Dance"], function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
    }
  });

  // logs the actual query being run
  console.log(query.sql);
  connection.end();
}

function addDance() {
  var newSong = connection.query("INSERT INTO songs (title) VALUES (" + selection + ")", function(err, res) {
  });
  console.log(newSong.sql);
}

function deleteSong() {
  console.log("Deleting Krewella...\n");
  connection.query(
    "DELETE FROM songs WHERE ?",
    {
      artist: "Krewella"
    },
    function(err, res) {
      console.log(res.affectedRows + " Artist deleted!\n");
      queryAllSongs();
    }
  )
}