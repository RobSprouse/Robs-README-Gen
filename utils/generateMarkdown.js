
// COMMENT: Source: A repository containing Markdown License Badges https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba
// COMMENT: Function to render the license badge
// If there is no license, return an empty string
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

// COMMENT: Function to render the license link
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

// COMMENT: Function to render the license section
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

// COMMENT: Function to generate the README markdown
function generateMarkdown(data) {
     return `
# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

If you have any questions, please contact me at ${
          data.email
     }. You can also visit my GitHub profile at https://github.com/${data.github}.
`;
}

// COMMENT: Export the generateMarkdown function
export default generateMarkdown;
