const Manager = require('../lib/Manager');

describe('manager', () => {
    const manager = new Manager('name', 'id','email', 'officenumber');
    it('should return manager office number', () => {
        expect(manager.officeNumber).toBe('officenumber');
        expect(manager.getOfficeNumber()).toBe('officenumber');
    })
})