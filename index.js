const inquirer_sys = require('inquirer');
const Engineer_sys = require('./lib/Engineer');
const Manager_sys = require('./lib/Manager');
const Intern_sys = require('./lib/Intern');
const fs = require('fs');
let storage = []



const execute = () =>{
    inquirer_sys.prompt ([
        {
            type: 'list',
            name: 'name',
            message: "Do you want to add more people",
            choices: ["Add Engineer","Add Intern", "Done"] 
        }
    ]).then(response => {
        console.log(response)
        switch(response.name) {
            case "Add Engineer":
                addingE()
                break;
            case "Add Intern": 
                addI();
                break;
            case "Done": 
                createpage();
                break;
            default:
                 generateHTML()
            }
        }
    )
}

const createpage = () =>{
    fs.writeFileSync('./dist/team.html', `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
    `)



    //loop
    for (let j = 0; j < storage.length; j++) {

    fs.appendFileSync('./dist/team.html', `
    <div>
            <p>Name: ${storage[j].name}</p>
            <p>Title: ${storage[j].getRole()}</p>
            <p>Id:  ${storage[j].id}</p>
            <p>Email: ${storage[j].email}</p>
        </div>
        <br>
    `)}
    fs.appendFileSync('./dist/team.html', `
    </body>
    </html>
    `)
}

const addI = () =>{
    inquirer_sys.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Input intern's Name: ",
        },
        {
            type: 'input',
            name: 'id',
            message: "Input intern's ID #: ",            
        },
        {
            type: 'input',
            name: 'email',
            message: "Input intern's email Address: ",            
        },
        {
            type: 'input',
            name: 'school',
            message: "Input Intern's School: ",
        }
    ]).then(response => {
        const newperson3 = new Intern_sys(response.name,response.id,response.email,response.school)
        storage.push(newperson3)
        console.log(storage);
        execute()
    })
}

const addingM = () =>{
    inquirer_sys.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Input manager's name: ",
        },
        {
            type: 'input',
            name: 'id',
            message: "Input manager's id #: ",            
        },
        {
            type: 'input',
            name: 'email',
            message: "Input manager's email: ",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Input manager's office number:",            
        }
    ]).then(response => {
        const newperson = new Manager_sys(response.name,response.id,response.email,response.officeNumber)
        storage.push(newperson)
        console.log(storage);
        execute()
    })
}

addingM()

const addingE = () =>{
    inquirer_sys.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Input engineer's Name: ",
        },
        {
            type: 'input',
            name: 'id',
            message: "Input engineer's ID #: ",            
        },
        {
            type: 'input',
            name: 'email',
            message: "Input engineer's email Address: ",
        },
        {
            type: 'input',
            name: 'github',
            message: "Input Github Username: ",
        }
    ]).then(response => {
        const newperson2 = new Engineer_sys(response.name,response.id,response.email,response.github)
        storage.push(newperson2)
        console.log(storage);
        execute()
    })
}


