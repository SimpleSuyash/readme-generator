// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenceBadge(licence) {
  let badge = "";
  if(licence === "Apache-2.0") {
      badge = "![Apache-2.0 licence badge](https://img.shields.io/badge/License-Apache_2.0-blue.svg)";
  } else if (licence === "BSL-1.0") {
      badge = "![BSL-1.0 licence badge](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)";
  } else if (licence === "WTFPL") {
      badge = "![WTFPL licence badge](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)";
  }else if (licence === "EPL-1.0") {
      badge = "![EPL1.0 licence badge](https://img.shields.io/badge/License-EPL_1.0-red.svg)";
  } else if (licence === "GPL-3.0") {
      badge = "![GPL-3.0 licence badge](https://img.shields.io/badge/License-LGPL_v3-blue.svg)";
  } else if (licence === "ISC") {
      badge = "![ISC licence badge](https://img.shields.io/badge/License-ISC-blue.svg)";
  }  else if (licence === "MIT") {
      badge = "![MIT licence badge](https://img.shields.io/badge/License-MIT-yellow.svg)";
  } else if (licence === "Unlicense") {
      badge = "![Unlicense licence badge](https://img.shields.io/badge/license-Unlicense-blue.svg)";
  }
  return badge;
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenceLink(licence) {
  let link ="";
  if(licence === "Apache-2.0") {
      link = "https://opensource.org/licenses/Apache-2.0";
  } else if (licence === "BSL-1.0") {
      link = "https://www.boost.org/LICENSE_1_0.txt";
  } else if (licence === "WTFPL") {
      link = "http://www.wtfpl.net/about/";
  }else if (licence === "EPL-1.0") {
      link = "https://opensource.org/licenses/EPL-1.0";
  } else if (licence === "GPL-3.0") {
      link = "https://www.gnu.org/licenses/lgpl-3.0)";
  } else if (licence === "ISC") {
      link = "https://opensource.org/licenses/ISC";
  }  else if (licence === "MIT") {
      link = "https://opensource.org/licenses/MIT";
  } else if (licence === "Unlicense") {
      link = "http://unlicense.org/";
  }
  return link;
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenceSection(licence) {
    let licenceSection ="";
    if(licence){
    licenceSection = `## Licence

This application is covered under ***${licence}*** licence. For more information about the licensing, please click the following link.     
<${renderLicenceLink(licence)}>
  `}
  return licenceSection;
}

//render the title of the project with every word capitalised
function renderTitle(title){
    let words = title.split(" ");
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));//word[0].toUpperCase() + word.substring(1); 
    return `# ${words.join(" ")}`;
}

// Generates markdown for README
function generateMarkdown(data) {
  return `${renderLicenceBadge(data.licence)}
  
${renderTitle(data.title)} 

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Test](#test)
- [Licence](#licence)
- [Questions](#questions)

## Installation

    ${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributions}

## Test

${data.tests}

${renderLicenceSection(data.licence)}

## Questions

For any queries, please contact me on:
* GitHub: <https://github.com/${data.username}>
* Email: <${data.email}>
    `;
}   


//exporting generateMarkdown function
module.exports= generateMarkdown;

