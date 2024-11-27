import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-roles',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css'
})
export class RolesComponent {


  http = inject(HttpClient);
  roleList : IRole [] = [];
  isLoader: boolean = true;

  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles () {
    this.http.get("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles").subscribe((response : any) => {
        this.roleList = response.data;
        this.isLoader = false;
    },error => {
      alert("Network Down!")
      this.isLoader = false;
    });
  }


  // firstName: string = "Strava";
  // age: number = 21;
  // isActive: boolean = false;
  // text:string = "Click Me!";

  // // TS function
  // showMessage () {
  //   alert("Hello World!")
  // }


}
