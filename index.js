// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const {
  generateMarkdown,
  createREADME,
} = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [];

const promptUser = () => {
  return inquirer.prompt([
    {
      name: "title",
      type: "input",
      message: "What is Your Project Title:",
    },

    {
      name: "description",
      type: "input",
      message: "Enter Project Decription:",
    },
  ]);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
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
