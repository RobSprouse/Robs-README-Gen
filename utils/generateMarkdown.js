// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// Source: Link to a repository containing Markdown License Badges https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
function renderLicenseBadge(license) {
     switch (license) {
          case "MIT":
               return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
          case "Apache License 2.0":
               return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
          case "GNU GPL v3":
               return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
          case "BSD License":
               return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
          case "Mozilla":
               return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
          default:
               return "";
     }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
     switch (license) {
          case "MIT":
               return "https://opensource.org/licenses/MIT";
          case "Apache License 2.0":
               return "https://opensource.org/licenses/Apache-2.0";
          case "GNU GPL v3":
               return "https://www.gnu.org/licenses/gpl-3.0";
          case "BSD License":
               return "https://opensource.org/licenses/BSD-3-Clause";
          case "Mozilla":
               return "https://opensource.org/licenses/MPL-2.0";
          default:
               return "";
     }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
     if (license) {
          return `
   ## License
   
   This application is licensed under the ${license} license. See the following link for more information: ${renderLicenseLink(
               license
          )}
   `;
     } else {
          return "";
     }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
