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

module.exports = renderLicenseBadge()