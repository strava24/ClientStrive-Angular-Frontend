 import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { ClientProject, Employee, IResponse } from '../../model/interface/role';
import { Client } from '../../model/class/Client';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, DatePipe],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl("", Validators.required),
    startDate: new FormControl(""),
    expectedEndDate: new FormControl(""),
    empId: new FormControl(0),
    empName: new FormControl(""),
    empCode: new FormControl(""),
    empEmailId: new FormControl(""),
    empDesignation: new FormControl(""),
    clientName: new FormControl("")

  });

  projectList = signal<ClientProject[]>([]);


  clientService = inject(ClientService);
  employeeList: Employee[] = [];
  clientList: Client[] = [];

  ngOnInit(): void {
      this.getAllEmployee()
      this.getAllClient()
      this.getAllClientProjects();
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe((response: IResponse) => {
      this.employeeList = response.data;
    })
  }

  getAllClient() {
    this.clientService.getAllClients().subscribe((response: IResponse) => {
      this.clientList = response.data;
    })
  }

  onSave() {
    const formValue = this.projectForm.value;

    this.clientService.addClientProject(formValue).subscribe((response: IResponse) => {
      if(response.result) {
        alert('Success!')
      } else {
        alert('Fail' + response.message)
      }
    })
  }

  getAllClientProjects() {
    this.clientService.getAllClientProjects().subscribe((response: IResponse) => {
      this.projectList.set(response.data);
    })
  }
  

}
