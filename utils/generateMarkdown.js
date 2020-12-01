// function to generate markdown for README
function generateMarkdown(
  {
  title,
  description,
  installation,
  usage,
  contribution,
  test,
  license,
  github,
  email
}
){
  //tempelate for the new file using the user's input
  return `# ${title};

  ## Table of Contents:
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contibution](#contribution)
  - [Testing](#testing)
  - [License](#license)
  - [Questions](#questions)

  
  ## Description:
  ${description}
  
  ## Installation:
  ${installation}
  
  ## Usage:
  ${usage}
  
  ## Contribution:
  ${contribution}
  
  ## Testing:
  ${test}
  
  ## License:
  ![License](https://img.shields.io/endpoint?License=${license}&logo=appveyor)

  ## Questions?
  GitHub: ${github}
  Email: ${email}`;
  
}

module.exports = generateMarkdown;