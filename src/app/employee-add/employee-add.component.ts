import { Component, Output, EventEmitter } from '@angular/core';
import { Employees } from '../models/employees';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {

  employees:Employees[]=[];

  @Output() employeeAdded = new EventEmitter<Employees[]>;

  addEmployee(employeeName:string){
    let employee:Employees={name:employeeName};
    this.employees.push(employee);
    // console.log(this.employees);
    this.employeeAdded.emit(this.employees);
  }
}
