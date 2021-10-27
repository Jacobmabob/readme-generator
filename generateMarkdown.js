
function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case 'GNU GPL v3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case 'None':
      return ''
  }
}


function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  } else {
    return `[License](#license)`
  }
}


function renderLicenseSection(license) {
  if (license == 'None') {
    return ''
  } else {
    return `## License
This application is licensed under the ${license}`
  }
}


function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ---

  ## Description

  ${data.description}


  ## Installation

  ${data.instructions}


  ## Usage

  ${data.usage}


  ## Contributing

  ${data.contributing}


  ## Tests

  ${data.tests}


  ## Questions
  Have any questions? Feel free to check out my github or send me an Email!

  github.com/${data.github} <br>
  ${data.email}

  ${renderLicenseSection(data.license)};

`
}

module.exports = generateMarkdown;
