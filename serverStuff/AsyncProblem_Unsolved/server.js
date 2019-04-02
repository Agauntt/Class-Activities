var orm = require("./config/orm.js");

// orm.selectWhere("parties", "party_type", "grown-up", function(data){
//     console.log(data);
// });

orm.selectWhere("parties", "party_type", "grown-up")
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        throw err;
    })



 // Data is undefined. Why?
