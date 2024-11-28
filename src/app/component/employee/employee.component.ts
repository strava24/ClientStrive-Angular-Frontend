import { Component } from '@angular/core';
import { AlertComponent } from "../../reusableComponent/alert/alert.component";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [AlertComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {

}
