"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeManager = void 0;
class EmployeeManager {
    constructor() {
    }
    static add(...employee) {
        this.employees.push(...employee);
    }
    static getListEmployee() {
        return this.employees;
    }
    static findIndex(lastName) {
        let i = -1;
        this.employees.forEach((employ, index) => {
            if (employ.lastName == lastName) {
                i = index;
            }
        });
        return i;
    }
    static deleteEmployee(lastName) {
        let indexEmployeeDelete = this.findIndex(lastName);
        if (indexEmployeeDelete !== -1) {
            this.employees.splice(indexEmployeeDelete, 1);
        }
        else {
            throw new Error("Delete Error");
        }
    }
    static updateEmployee(firstName, lastName, birthDay, address, index) {
        let indexEmployeeUpdate = this.findIndex(lastName);
        if (indexEmployeeUpdate !== -1) {
            this.employees[indexEmployeeUpdate].firstName = firstName;
            this.employees[indexEmployeeUpdate].lastName = lastName;
            this.employees[indexEmployeeUpdate].birthDay = birthDay;
            this.employees[indexEmployeeUpdate].address = address;
            this.employees[indexEmployeeUpdate].index = index;
        }
        else {
            throw new Error("Update Error");
        }
    }
}
exports.EmployeeManager = EmployeeManager;
EmployeeManager.employees = [];
