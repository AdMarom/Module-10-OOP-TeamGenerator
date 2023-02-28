//class
const Employee = require('./Employee')

//inherits the values from employee class & can add it's own custom values as well
class Engineer extends Employee { 
    constructor(name, id, email, gitHub) {
       super (name, id, email)
        this.role = "Engineer"
        this.gitHub = gitHub
    }

    //getter methods
    
    getRole() {
        return this.role;
    }

    getGitHub() {
        return this.gitHub
    }
    
}

module.exports = Engineer



