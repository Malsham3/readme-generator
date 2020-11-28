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
  return `# ${title};

  
  ## Description:
  ${description}
  
  ## Installation:
  ${installation}
  
  ## Usage:
  ${usage}
  
  ## Contribution:
  ${contribution}
  
  ## Test:
  ${test}
  
  ## License:
  ![License](https://img.shields.io/badge/License-${license}-blue)

  ## GitHub: 
  Username: ${github}

  ## Email:
  ${email}`;
}


module.exports = generateMarkdown;
