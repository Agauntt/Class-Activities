var axios = require('axios');

var movie = process.argv[2];


axios   
    .get("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy")
    .then(function(response){
        console.log(response.Rated);
    })
    .catch(function(error){
        if (error.response){
            console.log(error.response);
        }
    })