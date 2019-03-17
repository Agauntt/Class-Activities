// Requirements
var mySQL = require("mysql");
var inquirer = require("enquirer");

// 

inquirer
  .prompt([
    {
        type: 'input',
        name: 'whatToBid',
        message: "What would you like to bid on?",
        choices: choices
      },
  ])
  .then(answers => {
   
  });