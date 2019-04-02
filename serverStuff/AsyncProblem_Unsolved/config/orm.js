var connection = require("../config/connection.js");

var orm = {
  selectWhere: function(tableInput, colToSearch, valOfCol) {
    return new Promise(function(resolve, reject) {
      
    var queryString = "SELECT * FROM ?? WHERE ?? = ?";

    connection.query(queryString, [tableInput, colToSearch, valOfCol], function(err, result) {
      if (err) reject(err);
      resolve(result);
    });
  });
}
};

module.exports = orm;
