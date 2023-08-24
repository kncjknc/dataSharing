import { Component, Input } from '@angular/core';
import { Employees } from '../models/employees';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent {

  @Input() employees:Employees[]=[];

}
