const fs = require("fs");

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  const { title, description } = data;

  return `
  # ${title}
  
  ## Description
  
  ${description}
  `;
};

const createREADME = (content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", content, (err) => {
      if (err) {
        reject(err);
        return;
      }

      console.log("README Created");

      resolve({
        ok: true,
        message: "README Created",
      });
    });
  });
};

module.exports = {
  generateMarkdown,
  createREADME,
};
