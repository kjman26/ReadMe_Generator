//dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const index = require('../index')
//function that returns a license badge based on which license is passed by user choice and if none then return empty string

function renderLicenseBadge(LICENSE) {
    let badge = "";
    if (LICENSE === "APM") {
        badge = ![Alt = badge]('https://img.shields.io/apm/l/APM?style=flat-square')
    } else if (LICENSE === "CRAN/METACRAN"){
        badge = ![alt = badge]('https://img.shields.io/cran/l/CRAN?color=red')
    } else if (LICENSE == "NPM") {
        badge = ![alt = badge]('https://img.shields.io/npm/l/NPM?color=BLUE')
    } else {
        badge = ""
    }
    return badge;
};

function generateMarkdown(answers) {
    console.log(answers);
    
    
  //this will return all the answers to be rendered. template string literal so needs to be written with precision 
  //table of contents will include all elements to be rendered from user input in index.js
  //license function call renders the result of rendering functions above with the answers.license set as a parameter from the question array in index.js
  
  
    return `
    # ${answers.title}
    ## ${renderLicenseSection(answers.license)} 
    ## ${renderLicenseBadge(answers.license)}
    ### ${renderLicenseLink(answers.license)}
    ## Table of Contents:
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Screenshots](#screenshots)
    - [Credits](#credits)
    - [Features](#features)
    - [Contribute](#contribute)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Description
    ### ${answers.description}
    ## Installation 
    ### ${answers.installation}
    ## Usage
    ### ${answers.usage}
    ## Screenshots
    ### ${answers.screenshots}
    ## Credits
    ### ${answers.credits}
    ## Features
    ### ${answers.features}
    ## Contribute
    ### ${answers.contribute}
    ## Tests
    ### ${answers.tests}
    ## Questions
    ### Email: ${answers.email}
    ### Github: ${answers.github}
  `;
  }
module.exports = generateMarkdown;