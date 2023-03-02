//Engineer constructor
const Engineer_test = require('../lib/Engineer');



test('engineer', () =>{
    let v = new Engineer_test('vageli', 4, 'bulking@fire.com', 'bulkingfire');
    expect(v.name).toBe('vageli');
    expect(v.id).toBe(4);
    expect(v.email).toBe('bulking@fire.com');
    expect(v.github).toBe('bulkingfire');
})