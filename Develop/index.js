//Including packages needed for this application
//importing inquirer node package
const inquirer = require("inquirer");
//importing questions module
//has all the prompts
const questions = require("./utils/questions");
//importing generateMardwown module
const renderTemplate = require("./utils/generateMarkdown");
//importing fs node module
const fs = require("node:fs");

// Writes README file in the root folder
function writeToFile(fileName, data){
    fs.writeFile(`../${fileName}.md`, data, err =>{
        if (err){
            console.log(err);
        }
        else{
            console.log(`../${fileName}.md has been created`);
        }
    });
  }

// Creates a function to initialize app
function init() {
    //loading the inquirer to initiate the prompts
    inquirer
        .prompt(questions)
        .then(
            response=>{
            console.log(response);
            writeToFile("generated-README", renderTemplate(response) );
            }
        )
        .catch((error) => {
            if (error.isTtyError) {
            console.log("Prompt couldn't be rendered in the current environment");
            } else {
            console.log(error);
            console.log("Something else went wrong");
            }
        });
}

// Calling init function to initialize app
init();
