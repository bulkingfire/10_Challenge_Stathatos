const Employees_var = require("./Employee")

class Managers_vars extends Employees_var{

    constructor(name,id,email,officeNumber){
        super(name,id,email)
        this.officeNumber = officeNumber

    }
    gitGithub() {

        return this.officeNumber
    }
    getRole(){
        return "Manager"

    }
}

module.exports = Managers_vars