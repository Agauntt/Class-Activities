var inquirer = require("inquirer");

inquirer
    .prompt([
    {
        type: "input",
        message: "what is your name?",
        name: "userName"
    },
    {
        type: "input",
        message: "what is your favorite color?",
        name: "color"
    },
    {
        type: "list",
        message: "which do you like most?",
        name: "mostLiked"
    },
    {
        type: "password",
        message: "input a password",
        name: "password"
    }
    ])