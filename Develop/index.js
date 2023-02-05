// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Please write a brief description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "How should the project be installed?"
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage of your project?"
  },
  {
    type: "list",
    name: "license",
    message: "What license would you like to use for your project?",
    choices: ["MIT", "Apache 2.0", "GPL 3.0", "BSD 3", "None"]
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the guidelines for contributing to the project?"
  },
  {
    type: "input",
    name: "tests",
    message: "What are the tests for the project?"
  },
  {
    type: "input",
    name: "githubUsername",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];


// Creating the README file and adding answers

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, err => {
      if (err) {
        return console.log(err);
      }
      console.log(`${fileName} has been created!`);
    });
  };
  
  // adding license depending on answer provided, blank if none provided

  const generateReadme = answers => {
    let licenseBadge = "";
    switch (answers.license) {
      case "MIT":
        licenseBadge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Apache 2.0":
        licenseBadge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "GPL 3.0":
        licenseBadge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;
      case "BSD 3":
        licenseBadge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;
      default:
        licenseBadge = "";
        break;
    }
  
    const readme = `# ${answers.title}
  
  ${licenseBadge}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  This project is licensed under the ${answers.license} license.
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  ${answers.tests}
  
  ## Questions
  
  If you have any questions, please feel free to reach out to me at [${answers.email}](mailto:${answers.email}).
  You can also check out my GitHub profile at [${answers.githubUsername}](https://github.com/${answers.githubUsername}).
  `;
  
    writeToFile("README.md", readme);
  };
  
  inquirer.prompt(questions).then(generateReadme);

// function to initialize app
const initializeApp = () => {
    inquirer.prompt(questions).then(answers => {
      // write the README file using the answers
      // ...
    });
  };

// Function call to initialize app
initializeApp();
