const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const { validateHeaderValue } = require('http');
const { default: Choices } = require('inquirer/lib/objects/choices');

let finalHTML = ''

let managerQuestions = [
    {
        type: 'input',
        message: 'Please enter manager name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter manager employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter manager email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter manager office number',
        name: 'office'
    },

]

const newManager = () => {
    return inquirer.prompt(managerQuestions) .then(answers => {
        console.log(answers);
        let managerHTML =  `
        <!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" type="text/css" href="./style.css" />
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
<title>My Team</title>
</head>
<body  class="container text-center" >
        <header>
                <h2>Viewing: ${answers.name}'s Team </h1>
        </header>
        <main class="row">  
                <div id="manager_div" class="col"> 
                        <h3>Manager</h3>
                        <p>Name: ${answers.name}</p>
                        <p>Email:
                        <a href="${answers.email}">${answers.email}</a>
                        </p>
                        <p>Id: ${answers.id}</p>
                        <p>Office Number: ${answers.office}</p>
                </div>`
        finalHTML += managerHTML
        addMember()
    })
}





const addMember = () => {

inquirer.prompt( [
    {
        type: 'list',
        message: 'Would you like to add an intern or engineer?',
        name: 'team',
        choices: ['Add Engineer', 'Add Intern', 'Finish Buidling Team'],
      },
])

.then((data) => {
    console.log(data)
        if(data.team === 'Add Engineer') {
            newEngineer();
        }
        else if(data.team === 'Add Intern') {
           newIntern();
        }
        else {
            return writeHTML();
        }
    })
};


let engineerQuestions = [
    {
        type: 'input',
        message: 'Please enter engineer name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter engineer employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter engineer email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter engineer gitHub handle (example: "AdMarom")',
        name: 'github'
    },
]

const newEngineer = () => {
     inquirer.prompt(engineerQuestions) .then(answers => {
        console.log(answers);
        let engineerHTML = `
    <div id="engineer_div" class="col">
        <h3>Engineer</h3> 
        <p>Name: ${answers.name}</p>
        <p>Email:
                <a href="${answers.email}">${answers.email}</a>
        </p>
        <p>Id: ${answers.id}</p>
        <p>GitHub:
                <a href="https://github.com/${answers.github}" target="_blank">@${answers.github}</a></p>
    </div>`
        finalHTML += engineerHTML
        addMember()
    })
}

let internQuestions = [
    {
        type: 'input',
        message: 'Please enter intern name',
        name: 'name'
    },
    {
        type: 'input',
        message: 'Please enter intern employee ID',
        name: 'id'
    },
    {
        type: 'input',
        message: 'Please enter intern email address',
        name: 'email'
    },
    {
        type: 'input',
        message: 'Please enter school',
        name: 'school'
    },
]

const newIntern = () => {
    return inquirer.prompt(internQuestions) .then(answers => {
        console.log(answers);
        let internHTML = `        
    <div id="intern_div" class="col"> 
        <h3>Intern</h3>
        <p>Name: ${answers.name}</p>
        <p>Email:
                <a href="${answers.email}">${answers.email}</a>
        </p>
        <p>Id: ${answers.id}</p>
        <p>School: ${answers.school}</p>
    </div>`
        finalHTML += internHTML
        addMember()
    })
}

const writeHTML = () => {
    let endHTML = `</main>  
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
    </html>`
    finalHTML += endHTML

    fs.writeFile('./dist/index.html', finalHTML, (err) =>
    err ? console.error(err) : console.log('Success!')
  );
  
}


newManager();

