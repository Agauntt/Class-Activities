var firstArg = process.argv[2];
var secondArg = process.argv[3];
console.log(firstArg);
console.log(secondArg);
if (firstArg == secondArg)
    console.log("equal");
else console.log("not equal");
if (firstArg % 7 == 0 && secondArg % 7 == 0)
    console.log("both multiples of 7")
 else console.log("both are not multiples of 7")