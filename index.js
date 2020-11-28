//inquirer module to be used with prompt
const inquirer = require("inquirer");

//import questions from seperate file
const promptQuestions = require("./utils/questions");

//import generate function that'll build content given user input
const generateMarkdown = require ("./utils/generateMarkdown");

// fs module to write the file
const fs = require("fs");

//prompt user with the questions from questions.js , write a file named Example.md and use generateMarkdown template with user's input. 
// callback function included line 17
inquirer.prompt(promptQuestions).then((data) => {
    fs.writeFile("Example.md", generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('Success!')
    );
})