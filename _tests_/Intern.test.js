const Intern = require('../lib/Intern');

describe('intern', () => {
    const intern = new Intern('name','id','email', 'school');
    it('should return intern school', () => {
        expect(intern.school).toBe('school');
        expect(intern.getSchool()).toBe('school')
    });
    

})