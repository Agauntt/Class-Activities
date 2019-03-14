var cli = require("./cli"); 





//API CALL=========================================================
axios
    .get('http://api.tvmaze.com/search/shows?q=')
    .then(response => (this.info = response.data))
    .catch(error => console.log(error))