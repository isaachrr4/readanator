// TODO: Include packages needed for this application
const inq = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the name of the project?",
        name: "name",
      },

      {
          type: "input",
          message: "Add a Description of the project",
          name: "description",
      },

      {
          type: "list",
          message: "pick a license",
          name: "license",
          choice: ["MIT" , "Apache" , "none"]
      },

      {
          type: "input",
          message: "add user story information",
          name: "user story"
      },

      {
          type: "input",
          message: "add your contributors here",
          name: "contributors"
      },

      {
          type: "input",
          message: "add any features used for the project",
          name: "features"
      },

      {
          type: "input",
          message: "add tests used for the project",
          name: "test"
      }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName +'.md', generateMarkdown(data), function(err) {

        if (err) {
            return console.log(err);
          }
        
          console.log('Complete!');
        
        });
};

// TODO: Create a function to initialize app
function init() {
    inq.prompt(questions).then((fileName, data) => writeToFile(fileName, data));
}


// Function call to initialize app
init();
