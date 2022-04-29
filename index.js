// ✔️ Include packages needed for this application
const fs = require("fs");
const fsPromises = require("fs/promises");
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
      type: "editor",
      message: "Enter Credits, Save, Then Exit Editor:",
    },

    {
      name: "license",
      type: "list",
      message: "Choose Software License:",
      choices: [
        "None",
        "Apache License 2.0",
        "Boost Software License 1.0",
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "MIT License",
        "Mozilla Public License 2.0",
        "The Unlicense",
      ],
      pageSize: 9,
      loop: false,
      default: "None",
    },

    {
      name: "contributing",
      type: "confirm",
      message:
        "Would you like to use Contributor Covenant? Type N to create a custom Contributor Guideline",
    },

    {
      name: "contributingCustom",
      type: "input",
      message: "Enter Custom Contribution Guideline:",
      when: ({ contributing }) => {
        if (!contributing) {
          return true;
        } else {
          return false;
        }
      },
    },

    {
      name: "tests",
      type: "input",
      message: "Enter tests for user to try your product with:",
    },

    {
      name: "email",
      type: "input",
      message: "Enter Your Email Address:",
    },

    {
      name: "github",
      type: "input",
      message: "Enter Your Github Username:",
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
      return generateMarkdown(promptResp);
    })
    .then((markdown) => {
      return createREADME(markdown);
    });
}

// Function call to initialize app
init();
