// ✔️ Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {
  generateMarkdown,
  createREADME,
} = require("./utils/generateMarkdown.js");

// inquirer prompt
const promptUser = () => {
  return inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is Your Project Title:",
    },

    {
      name: "description",
      type: "editor",
      message: "Enter Project Decription, Save, Then Exit Editor:",
    },

    {
      name: "installation",
      type: "input",
      message: "Installation Instructions:",
    },

    {
      name: "usage",
      type: "input",
      message: "Enter Use Cases:",
    },

    {
      name: "credits",
      type: "input",
      message: "Enter Credits:",
    },

    {
      name: "license",
      type: "list",
      message: "Choose Software License:",
      choices: [
        "Apache License 2.0",
        "Boost Software License 1.0",
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "MIT License",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
    },

    {
      name: "contributing",
      type: "input",
      message: "Enter Contribution Guidelines:",
    },

    {
      name: "tests",
      type: "input",
      message: "Enter tests for user to try your product with:",
    },
  ]);
};

// ✔️ Create a function to initialize app
function init() {
  console.log(`
    ======= README Gernorator ======= 
    `);

  promptUser()
    .then((promptResp) => {
      console.log(promptResp);
      console.log(generateMarkdown(promptResp));
      return generateMarkdown(promptResp);
    })
    .then((markdown) => {
      return createREADME(markdown);
    });
}

// Function call to initialize app
init();
