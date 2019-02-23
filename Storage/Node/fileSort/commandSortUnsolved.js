// Quick warm-up activity
// Create an application that takes in a series of numbers then sorts them.
// Feel encouraged to use Stack or Google to find the "sort" code.
// ===========================================================================================

// var arr = [];
var args = process.argv
var arr = args.slice(2);


// for (i = 2; i < args.length; i++){
//     arr.push(args[i]);
// }

// arr.sort(function (a, b) {return a-b; }); //simplified way to sort an array of numbers

console.log(arr);
