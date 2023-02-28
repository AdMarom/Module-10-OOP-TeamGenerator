//class
const Employee = require('./Employee')

//inherits the values from employee class & can add it's own custom values as well
class Manager extends Employee { 
    constructor(name, id, email, officeNumber) {
       super (name, id, email)
        this.role = "Manager"
        this.officeNumber = officeNumber
    }

    //getter methods
    
    getRole() {
        return this.role;
    }

    getOfficeNumber() {
        return this.officeNumber
    }
    
}

module.exports = Manager



