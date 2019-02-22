const fs = require("fs");

fs.readFile("best_things_ever.txt","utf8", (err, data) => {
  if (err) {
    console.log(err);
  }

var items = data.split(',');

items.forEach(function (item){
    console.log(item.trim());
});

for(item of items){
    console.log(item.trim());
}

});
