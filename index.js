const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown')


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What what would you like to call your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please give brief description of your project.',
    },
    {
      type: 'input',
      name: 'instructions',
      message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Who contributed to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Did you create any tests for your application? Desribe them here.',
    },
    {
      type: 'list',
      message: 'Would you like to include a license for your application? Choose from the options below.',
      name: 'license',
      choices: ['Apache License 2.0', 'MIT License', 'GNU GPL v3', 'None']
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address.',
    },
  ])
  .then((answers) => {
    const readmePageContent = generateMarkdown(answers);

    fs.writeFile('GeneratedREADME.md', readmePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created your README!')
    );
  });
