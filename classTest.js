"use strict";
class People {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get peopleName() {
        return this.name;
    }
    set peopleName(name) {
        this.name = name;
    }
    modifyAge(age) {
        this.age = age;
        console.log(this.age);
    }
    showPersonalInfo() {
        console.log('Name :', this.name);
        console.log('Age :', this.age);
    }
}
class RentalPartner extends People {
    dob = new Date();
    joiningDate;
    static instance;
    constructor(name, age, joiningDate) {
        super(name, age);
        this.joiningDate = joiningDate;
        console.log(`User created \n Name: ${this.peopleName} \n JoiningDate: ${this.joiningDate} \n BirthDate: ${this.dob}`);
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        return this.instance = new RentalPartner('Masud', 45, new Date());
    }
}
const partner1 = RentalPartner.getInstance();
const partner2 = RentalPartner.getInstance();
console.log(partner1, partner2);
//# sourceMappingURL=classTest.js.map