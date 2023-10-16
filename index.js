import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

const questions = [
     {
          type: "input",
          name: "title",
          message: "What is the title of your project?",
     },
     {
          type: "input",
          name: "description",
          message: "Please provide a description of your project:",
     },
     {
          type: "input",
          name: "installation",
          message: "Please provide installation instructions for your project:",
     },
     {
          type: "input",
          name: "usage",
          message: "Please provide usage instructions for your project:",
     },
     {
          type: "list",
          name: "license",
          message: "Please choose a license for your project:",
          choices: ["", "MIT", "Apache License 2.0", "GNU GPL v3", "BSD License", "Mozilla"],
     },
     {
          type: "input",
          name: "contributing",
          message: "Please provide instructions for contributing to your project:",
     },
     {
          type: "input",
          name: "tests",
          message: "Please provide instructions for running tests on your project:",
     },
     {
          type: "input",
          name: "github",
          message: "What is your Github Username as it appears in the URL of your repositories?",
     },
     {
          type: "input",
          name: "email",
          message: "What is your email address?",
     },
];

function writeToFile(fileName, data) {
     fs.writeFile(fileName, data, (err) => {
          if (err) {
               throw err;
          }
          console.log("README.md file generated!");
     });
}

function init() {
     inquirer.prompt(questions).then((answers) => {
          const markdown = generateMarkdown(answers);
          writeToFile("README.md", markdown);
     });
}

// Function call to initialize app
init();
