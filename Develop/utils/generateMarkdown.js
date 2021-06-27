// TODO: Create a function that returns a license badge based on which license is passed in
const inq = require("inquirer");
const fs = require("fs");
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "none" ) {
    return "";
  }
  else if (license === "MIT") {
    return  ` 
    ["![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"]
  `}

  else if (license === "Apache") {
    return  `
    [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)] 
    `
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "none" ) {
    return "";
}
else if (license === "MIT") {
  return "(https://opensource.org/licenses/MIT)"
  
}
else if (license === "Apache") {
  return "(https://opensource.org/licenses/Apache-2.0)"
}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "none") {
    return "";
  }

  else if (license === "MIT") {
    return "MIt License"
  }

  if (license === "Apache") {
    return "Apache 2.0 License"
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
${data.description}
## Table of Contents
*[License]
*[test]
*[contributors]
*[user story]

# Usage 
${data.usage}
# Contributiors
${data.contribution}
# Test 
${data.test}
#Features
${data.features}
# License
${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
