import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../services/master.service'
import { IDesignation, IResponse } from '../../model/interface/role';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit {

  designationList : IDesignation [] = [];

  masterService = inject(MasterService);

  
  ngOnInit(): void {
    this.masterService.getAllDesignation().subscribe((response : IResponse) => {
      this.designationList = response.data;
    },error => {
      alert("Network Down!")
    })
  }


}
