const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const InternHTML = require("./src/intern_html");
const EngineerHTML = require("./src/engineer_html");
const ManagerHTML = require("./src/manager_html");

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
        let {name, id, email, office} = answers;
        let managerobj = new Manager(name, id, email, office)
        console.log(managerobj)
        let managerHTML = ManagerHTML(managerobj)
        finalHTML += managerHTML
    })

    .then(answer => {

    })
}

let engineerQuestions = [
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
        message: 'Please enter gitHub',
        name: 'github'
    },
]

const newEngineer = () => {
    return inquirer.prompt(engineerQuestions) .then(answers => {
        let {name, id, email, github} = answers;
        let engineerobj = new Engineer(name, id, email, github)
        console.log(engineerobj)
        let EngineerHTML = EngineerHTML(engineerobj)
        finalHTML += EngineerHTML
    })
}

let internQuestions = [
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
        message: 'Please enter school',
        name: 'school'
    },
]

const newIntern = () => {
    return inquirer.prompt(internQuestions) .then(answers => {
        let {name, id, email, school} = answers;
        let internobj = new Intern(name, id, email, school)
        console.log(internobj)
        let InternHTML = InterHTML(internobj)
        finalHTML += InternHTML
    })
}

newManager();

//fs.writeFile('test.html', finalHTML, (err))