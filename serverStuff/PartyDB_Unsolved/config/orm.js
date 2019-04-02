var connection = require("./connection");

var orm = {
    select: function(whatToSelect, tableInput) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, [whatToSelect, tableInput], function(err, res) {
            if (err) throw err;
            console.log(res);
        });
    },
    selectClient: function(){
        
    }

};

module.exports = orm;