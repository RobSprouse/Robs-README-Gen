// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import {
     renderLicenseBadge,
     renderLicenseLink,
     renderLicenseSection,
     generateMarkdown,
} from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
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
          choices: ["MIT", "Apache License 2.0", "GNU GPL v3", "BSD License", "Mozilla"],
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
          message: "What is your GitHub username?",
     },
     {
          type: "input",
          name: "email",
          message: "What is your email address?",
     },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
