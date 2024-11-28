import { Component, inject, OnInit } from '@angular/core';
import { Client } from '../../model/class/Client';
import { FormsModule } from '@angular/forms';
import { ClientService } from '../../services/client.service';
import { IResponse } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule, ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {
  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService);

  ngOnInit(): void {
      this.getAllClients()
  }

  onSave() {
    this.clientService.saveUpdateClient(this.clientObj).subscribe((response: IResponse) => {
      if (response.result) {
        alert("Updated Client")
        this.clientObj = new Client()
        this.getAllClients()
      } else {
        alert("Could not update the client")
      }
    },error => {
      alert("Could not update the client")
    })
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe((response : IResponse) => {
      this.clientList = response.data;
    }, error => {
      alert("Network down")
    })
  }

  deleteClient(id: number) {
    const isDelete = confirm("Do you want to delete this Client?")

    if (isDelete) {
      this.clientService.deleteClient(id).subscribe((response : IResponse) => {
        if (response.result) {
          alert("Deleted Client")
          this.getAllClients()
        } else {
          alert("Could not delete the client")
        }
      }, error => {
        alert("Network down")
      })
    }
  }

  onEdit(item: Client) {
    this.clientObj = item;
  }

}
