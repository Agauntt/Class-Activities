// Dependencies
var express = require("express");

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 5000;

// Create express app instance.
var app = express();

// Routes
// What routes do you need to have? Which ones are optional?
// TODO Add your routes here
app.get("/:operation/:first/:last", function(req, res) {
var operation = req.params.operation;
var first = parseInt(req.params.first);
var last = parseInt(req.params.last);

  // TODO parse out the variables from the request
  // Parameters are received from the URL
  // TODO make sure they're converted to integers (and not strings)
  // Parameters are converted to integers

  // Initialize the result variable to send later
  var result;
  // Switch statement chooses operation based on the operation parameter.
  switch (operation) {
  // BONUS - How could you use * + etc. inside the app.get()?
  case "add":
   result = first + last;
    break;
  case "subtract":
    result = first - last;
    break;
  case "multiply":
    result = first * last;
    break;
  case "divide":
    if (last === 0) { 
    result = "cannot divide by zero";
    } else {
      result = first / last;
    }
    break;
  default:
    // Handle anything that isn't specified
    result =
        "Sorry! The only valid operations are add, subtract, multiply, and divide.";
  }

  // We return the result back to the user in the form of a string
  res.send(result.toString());

});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
