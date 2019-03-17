var express = require("express");

var app = express();
var PORT = 3000;




var yoda = {
    name: "Yoda",
    occupation: "Jedi Master",
    age: 900,
    forcePoints: 2000
};

var maul = {
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  };

var kenobi = {
    name: "Obi-Wan Kenobi",
    role: "Jedi Master",
    age: 70,
    forcePoints: 1700
}

// Routes
// ===========================================================================

app.get("/", function(req, res) {
    res.send("Welcome to the Star Wars Page!");
});

app.get("/yoda", function(req, res) {
    res.json(yoda);
});

app.get("/maul", function(req, res) {
    res.json(maul);
});

app.get("/kenobi", function(req, res) {
    res.json(kenobi);
});


// Listener
// ===================================================================
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
  