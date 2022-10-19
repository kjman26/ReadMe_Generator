//adding required packages
const inquirer = require("inquirer");
const fs = require("fs");
const toMarkdown = require("to-markdown");
const generateMarkdown = require("./Utils/generateMarkdown");

//create an array of questions for user input and will go to generateMarkdown

inquirer.createPromptModule([
    {
        type: 'input',
        message: 'ADD Title and a LINK to your project!',
        name: 'TITLE'
    },
    {
        type: 'input',
        message: 'Describe your project',
        name: 'DESCRIPTION'
    },
    {
        type: 'input',
        message: 'How do you INSTALL your project?',
        name: 'INSTALL'
    },
    {
        type: 'input',
        message: 'How do I use the application',
        name: 'USAGE'
    },
    {
        type: 'list',
        message: 'What LICENSE/BADGE would you like?',
        name: 'LICENSE',
        choices: ["APM", "CRAN/METACRAN", "NPM", "NONE"]
    },
    {
        type: 'input',
        message: 'Put SHOUTOUTS to contributors here!',
        name: 'CREDITS'
    },
    {
        type: 'input',
        message: 'What/Were TESTS were run?',
        name: "TESTS"
    },
    {
        type: 'input',
        message: 'Add your GitHub USERNAME',
        name: 'USERNAME'
    },
    {
        type: 'input',
        message: 'Add your EMAIL',
        name: 'EMAIL'
    }
])

.then((response) => {
   
    const md = `${response.TITLE}';

    Table of Contents:

    [Description](#Description)

    [Installation](#Install)

    [Usage](#Usage)
    
    [Contributions](#Credits)
    
    [Tests](#Test)
    
    [Questions](#Questions)    




})


   

//write the file using response.TITLE
const fileName = `${response.TITLE}.md`;
    fs.writeFile(fileName, md, (err) => err ? console.log(err) :
    console.log("Success!"));


