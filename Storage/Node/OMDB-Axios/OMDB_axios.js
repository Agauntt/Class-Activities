var axios = require('axios');

var movie = process.argv[2];

axios
    .get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        console.log(response.data.imdbRating);
    })
    .catch(function(error){
        if (error.response){
            console.log(error.response);
        }
    })

// Include the axios npm package (Don't forget to run "npm install axios" in this folder first!)
// var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
// axios
//   .get(
//     "http://www.omdbapi.com/?t=remember+the+titans&y=&plot=short&apikey=trilogy"
//   )
//   .then(function(response) {
//     console.log("The movie's rating is: " + response.data.imdbRating);
//   });
