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
  return `# ${title}`;

}



module.exports = generateMarkdown;
