// array of questions for user
const questions = [
    {
        name: 'title',
        message: 'What is the title of the project?'
    },
    {
        name: 'description',
        message: 'Describe the project'
    },
    {
        name: 'installation',
        message: 'How does one install the project?'
    },
    {
        name: 'usage',
        message: 'How does one use the project?'
    },
    {
        name: 'contribution',
        message: 'How can others contribute to the project?'
    },
    {
        name: 'test',
        message: 'How does one test the project?'
    },
    {
        name: 'license',
        message: 'Which license does the project need?',
        type: 'list',
        choices: ['MIT', 'Apache', 'GPL', 'None']
    },
    {
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        name: 'email',
        message: 'What is your email?'
    }
];

module.exports = questions;

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();
