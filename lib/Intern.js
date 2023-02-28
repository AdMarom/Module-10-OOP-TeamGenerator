//class
const Employee = require('./Employee')

//inherits the values from employee class & can add it's own custom values as well
class Intern extends Employee { 
    constructor(name, id, email, school) {
       super (name, id, email)
        this.role = "Intern"
        this.school = school
    }

    //getter methods
    
    getRole() {
        return this.role;
    }

    getSchool() {
        return this.school
    }
    
}

module.exports = Intern



