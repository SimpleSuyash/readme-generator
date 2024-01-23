
//project title question
const question1 = {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
    validate: answer =>{
        if(answer.trim()===""){
            return "Please enter a valid project title";
        }
        return true;
    }
};

//project description question
const question2 = {
    type: "input",
    name: "description",
    message: "What is your project description?",
    validate: answer =>{
        if(answer.trim()===""){
            return "Please provide a project description";
        }
        return true;
    }
};

//project installation question
const question3 =  {
    type: "input",
    name: "installation",
    message: "What are the instructions to install your project?",
    validate: answer => {
        if (answer.trim()==="") {
            return "Please provide installation instructions";
        } else {
            return true;
        }
    }
};

//project usage question
const question4 = {
    type: "input",
    name: "usage",
    message: "What is the use of your project?",
    validate: answer => {
        if (answer.trim()==="") {
            return "Please provide a use for your project";
        } else {
            return true;
        }
    }
};

//project contributions question
const question5 = {
    type: "input",
    name: "contributions",
    message: "What guidelines are to be followed in order to contribute to this project?",
    validate: answer => {
        if (answer.trim()==="") {
            return "Please enter contribution guidelines";
        } else {
           return true;
        }
    }
};

//project instruction question
const question6 = {
    type: "input",
    name: "tests",
    message: "What are the instructions to test this project?",
    validate: answer => {
        if (answer.trim()==="") {
            return "Please enter the test instructions for this project";
        } else {
            return true;
        }
    }
};

//project licence question
const question7 = {
    type: "list",
    name: "licence",
    message: "What licence does your project use?",
    choices: [ "Apache-2.0","BSL-1.0",  "WTFPL", "EPL-1.0","GPL-3.0", "ISC", "MIT","Unlicense"],
};

//project github username question
const question8 = {
    type: "input",
    name: "github-username",
    message: "What is your github username?",
    validate: answer => {
        if (answer.trim()==="") {
            return "Please enter the valid github username";
        } else {
            return true;
        }
    }
};

//project email address question
const question9 = {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: answer => {
        if (answer.trim()==="") {
            return "Please enter the valid email address";
        } else {
            return true;
        }
    }
};

// putting all the questions into an array 
const questions= [question1, question2, question3, question4, question5, question6, question7, question8, question9];
//exporting the questions array
module.exports = questions;

    
