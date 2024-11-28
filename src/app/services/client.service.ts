import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IResponse } from '../model/interface/role';
import { Client } from '../model/class/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<IResponse> {
    return this.http.get<IResponse>(environment.API_URL + "GetAllClients");
  }

  saveUpdateClient(data: Client): Observable<IResponse> {
    return this.http.post<IResponse>(environment.API_URL + "AddUpdateClient", data);
  }

  deleteClient(id: number): Observable<IResponse> {
    return this.http.delete<IResponse>(environment.API_URL + "DeleteClientByClientId?clientId=" + id);
  }

}
