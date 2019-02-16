var operator = process.argv[2];
var firstNum = parseInt(process.argv[3]);
var secondNum = parseInt(process.argv[4]);
var result;

function calc(){
    if (operator == "add" || operator == "addition"){
        result = firstNum + secondNum;
    } else if (operator == "sub" || operator == "subtract") {
        result = firstNum - secondNum;
    } else if (operator = "div" || operator ==  "divide") {
        result = firstNum / secondNum;
    }else if (operator = "mult" || operator == "multiply") {
        result = firstNum * secondNum;
    } else {
        console.log("Ya done goofed.");
    }
    console.log(result);
}
calc();