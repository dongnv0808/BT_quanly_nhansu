import { Employee } from "./employee";
import { EmployeeManager } from "./employee_manager";

let employee1 = new Employee("Van Thi Thanh", "Thuy", new Date("09-19-1996"), "HN", "Quan ly");
let employee2 = new Employee("Van Thi Thanh", "A", new Date("05-12-1995"), "HN", "Nhan vien");
let employee3 = new Employee("Nghiem Van", "Dong", new Date("08-08-1995"), "HN", "Bep Truong");
let employee4 = new Employee("Nghiem Van", "B", new Date("07-04-1999"), "HN", "Bep Pho");

EmployeeManager.add(employee1, employee2, employee3, employee4);

console.log(EmployeeManager.getListEmployee())

EmployeeManager.updateEmployee("Ngo Thi", "A", new Date("05-12-2000"), "SG", "Vip");
EmployeeManager.updateEmployee("Duy", "B", new Date("05-12-2001"), "TB", "Vip");

console.log(EmployeeManager.getListEmployee())

EmployeeManager.deleteEmployee("A");

console.log(EmployeeManager.getListEmployee())
