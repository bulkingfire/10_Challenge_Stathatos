const Employees_var = require("./Employee")


class Engineers_var extends Employees_var{
    constructor(name,id,email,github){

        super(name,id,email)
        this.github = github

    }
    gitGithub() {
        
        return this.github
    }
    getRole(){
        return "Engineer"

    }
}
module.exports = Engineers_var