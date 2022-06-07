import { Employee } from "./employee";

export class EmployeeManager{
    static employees: Employee[] = [];
    constructor(){

    }
    static add(...employee: Employee[]): void{
        this.employees.push(...employee);
    }
    static getListEmployee(){
        return this.employees
    }
    static findIndex(lastName:string){
        let i = -1
        this.employees.forEach((employ, index) => {
            if(employ.lastName == lastName){
                i = index;
            }
        })
        return i;
    }

    static getEmployeeDetail(lastName: string){
        for(let i = 0; i < this.employees.length; i++){
            if(lastName == this.employees[i].lastName){
                console.log(this.employees[i]);
            }
        }
    }   

    static deleteEmployee(lastName: string){
        let indexEmployeeDelete = this.findIndex(lastName);
        if(indexEmployeeDelete !== -1){
            this.employees.splice(indexEmployeeDelete, 1);
        }else{
            throw new Error("Delete Error");
        }
    }
    static updateEmployee(firstName: string, lastName: string, birthDay: Date, address: string, index: string){
        let indexEmployeeUpdate = this.findIndex(lastName);
        if(indexEmployeeUpdate !== -1){
            this.employees[indexEmployeeUpdate].firstName = firstName;
            this.employees[indexEmployeeUpdate].lastName = lastName;
            this.employees[indexEmployeeUpdate].birthDay = birthDay;
            this.employees[indexEmployeeUpdate].address = address;
            this.employees[indexEmployeeUpdate].index = index;
        }else{
            throw new Error("Update Error");
        }
    }
}