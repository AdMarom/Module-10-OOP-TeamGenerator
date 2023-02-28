//reference https://jestjs.io/docs/es6-class-mocks

const Employee = require('../lib/Employee');

describe('employee', () => {
    const employee = new Employee('name', 'id', 'email');
    it('should return employee name', () => {
        expect(employee.name).toBe('name')
        expect(employee.getName()).toBe('name')
    });
    it('should return employee id', () => {
        expect(employee.id).toBe('id')
        expect(employee.getId()).toBe('id')
    });
    it('should return employee email', () => {
        expect(employee.email).toBe('email')
        expect(employee.getEmail()).toBe('email')
    });
});