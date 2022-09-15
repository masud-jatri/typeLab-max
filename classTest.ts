abstract class People {
    // name: string;
    // age: number = 0;
    protected abstract dob: Date;

    constructor(private name: string, private age: number  ) {
        
    }

    get peopleName() {
        return this.name
    }

    set peopleName(name: string) {
        this.name = name
    }

    modifyAge(age: number){
        this.age = age
        console.log(this.age)
    }

    showPersonalInfo(this: People) {
        console.log('Name :', this.name)
        console.log('Age :', this.age)
    }
}

class RentalPartner extends People {
    dob: Date = new Date()
    private readonly joiningDate: Date;
    private static instance: RentalPartner;

    private constructor(name: string, age: number, joiningDate: Date){
        super(name, age)
        
        this.joiningDate = joiningDate
        console.log(`User created \n Name: ${this.peopleName} \n JoiningDate: ${this.joiningDate} \n BirthDate: ${this.dob}`);
        
    }

    static getInstance () {
        if(this.instance){
            return this.instance
        }
        return this.instance = new RentalPartner('Masud', 45, new Date())
        
    }




}

const partner1 = RentalPartner.getInstance();
const partner2 = RentalPartner.getInstance();

console.log(partner1, partner2);
