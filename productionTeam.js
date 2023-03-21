class productionTeam {
    constructor (firstName, lastName, occupation){
        this.firstName = firstName;
        this.lastName = lastName;
        this.occupation = occupation;
    }
    getFullName(){
        return this.firstName + ' ' + this.lastName
        }  

    }
    //director is an extention of the production team
    class director extends productionTeam {
        super(firstName, lastName, occupation)
    }

    class actors extends productionTeam {
        super(firstName, lastName, occupation)
    }



export default productionTeam