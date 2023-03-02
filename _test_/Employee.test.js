const Employees_test = require('../lib/Employee');





test('employee', () =>{
    let e = new Employees_test('bulkingfire', 4, 'bulking@fire.com');
    expect(e.name).toBe('vageli');
    expect(e.id).toBe(4);
    expect(e.email).toBe('bulking@fire.com');
})
