import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { DesignationComponent } from "../designation/designation.component";
import { RolesComponent } from "../roles/roles.component";

@Component({
  selector: 'app-master',
  standalone: true,
  imports: [CommonModule, DesignationComponent, RolesComponent],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css'
})
export class MasterComponent {

  currentComponent : string = '';

  switchTab (tab : string) : void {
    this.currentComponent = tab;
  }

}
