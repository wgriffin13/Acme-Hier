const hier = require('./acme-hier');

// describe what we are testing
describe('Show hierarchy function', () => {

    const users = [
        { id: 1, name: 'moe' },
        { id: 2, name: 'larry', managerId: 1},
        { id: 3, name: 'curly', managerId: 2 },
        { id: 4, name: 'shep', managerId: 1 },
        { id: 5, name: 'groucho', managerId: 4},
        { id: 6, name: 'tmt', managerId: 5},
        { id: 7, name: 'clc', managerId: 6}
    ];
    it('showManagementStructure', () => {
        expect(hier.showManagementStructure(users)).toEqual('');
    });

})
