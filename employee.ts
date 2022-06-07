export class Employee{
    firstName: string;
    lastName: string;
    birthDay: Date;
    address: string;
    index: string;
    constructor(firstName: string, lastName: string, birthDay: Date, address: string, index: string){
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDay = birthDay;
        this.address = address;
        this.index = index;
    }
}