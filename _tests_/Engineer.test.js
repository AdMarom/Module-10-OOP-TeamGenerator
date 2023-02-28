const Engineer = require('../lib/Engineer');

describe('engineer', () => {
    const engineer = new Engineer('name', 'id', 'email', 'gitHub');
    it('it should return engineers github', () => {
        expect(engineer.gitHub).toBe('gitHub');
        expect(engineer.getGitHub()).toBe('gitHub');

    });
})


