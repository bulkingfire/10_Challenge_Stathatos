const Employees_var = require("./Employee")
class Interns_var extends Employees_var{


    constructor(name,id,email,school){

        super(name,id,email)
        this.school = school
    }
    gitGithub() {
        
        return this.school
    }
    getRole(){

        return "Interns here"
    }
}
module.exports = Interns_var