const fs = require('fs');

var op = process.argv[2];
var val = process.argv[3];
var bal;

//Determine operator statement
if (op == "withdraw"){
    withdrawFunc(val);
} else if (op == "deposit"){
    depositFunc(val)
} else if (op == "total"){
    totalFunc()
} else if (op == "lotto"){
    lottoFunc()
}

function withdrawFunc(e) {
    fs.readFile('./ledger.txt', "utf8", (err, data) =>{
        if(err){
            console.log(err);
            return;
        }
        ;
        bal = data - e;
        console.log("You're current balance is: " + bal);
    })
    fs.appendFile("./ledger.txt", val, (err) =>{
        if(err){
            console.log(err);
            return;
        }
    })
}

function depositFunc(e) {
    fs.readFile('./ledger.txt', "utf8", (err, data) =>{
        if(err){
            console.log(err);
            return;
        }
        var items = data.split(" ");
        var i = items.length - 1;
        console.log(i);
        console.log(items);
        a = items[i];
        console.log(a);
        bal = parseInt(a) + parseInt(e);
        console.log(bal);
        console.log("You're current balance is: " + bal);
    })
    fs.appendFile("./ledger.txt"," " + bal, (err) =>{
        if(err){
            console.log(err);
            return;
        }
        console.log("content added");
    })
}

function totalFunc(){
    fs.readFile('./ledger.txt', (err, data) =>{
        if(err){
            console.log(err);
        }
        console.log("Your current ballance is: " + data);
    })
}