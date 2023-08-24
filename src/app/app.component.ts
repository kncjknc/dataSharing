import { Component } from '@angular/core';
import { Employees } from './models/employees';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DataSharing';

  employees:Employees[]=[];

  getEmployees(employees:Employees[]){
    this.employees=employees;
  }

}
