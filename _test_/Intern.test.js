//Intern constructor
const Intern_Test = require('../lib/Intern');



test('intern', () =>{
    let v = new Intern_Test('vageli', 4, 'bulking@fire.com', 'bulkingfire');
    expect(v.name).toBe('vageli');
    expect(v.id).toBe(4);
    expect(v.email).toBe('bulking@fire.com');
    expect(v.github).toBe('bulkingfire');
})