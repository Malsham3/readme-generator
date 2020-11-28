const inquirer = require("inquirer");
const promptQuestions = require("./questions");
const generateMarkdown = require ("./utils/generateMarkdown");
const fs = require("fs");

inquirer.prompt(promptQuestions).then((data) => {
    fs.writeFile("Example.md", generateMarkdown(data), (err) => 
    err ? console.log(err) : console.log('Success!')
    );
})