//Manager constructor
const Manager_test = require('../lib/Manager');




test('Manager', () =>{
    let v = new Manager_test('vageli', 4, 'bulking@fire.com', 'bulkingfire');
    expect(v.name).toBe('vageli');
    expect(v.id).toBe(4);
    expect(v.email).toBe('bulking@fire.com');
    expect(v.officeNumber).toBe('office');
})