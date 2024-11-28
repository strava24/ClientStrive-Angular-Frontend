import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { IResponse } from '../model/interface/role';
import { Client } from '../model/class/Client';
import { Constant } from '../constant/Constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAllClients() : Observable<IResponse> {
    return this.http.get<IResponse>(environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENTS);
  }

  saveUpdateClient(data: Client): Observable<IResponse> {
    return this.http.post<IResponse>(environment.API_URL + "AddUpdateClient", data);
  }

  deleteClient(id: number): Observable<IResponse> {
    return this.http.delete<IResponse>(environment.API_URL + "DeleteClientByClientId?clientId=" + id);
  }

  getAllEmployee(): Observable<IResponse>  {
    return this.http.get<IResponse> (environment.API_URL + "GetAllEmployee");
  }

  addClientProject(obj: Client): Observable<IResponse>  {
    return this.http.post<IResponse> (environment.API_URL + "AddUpdateClient", obj);
  }

  getAllClientProjects(): Observable<IResponse> {
    return this.http.get<IResponse> (environment.API_URL + "GetAllClientProjects");
  }


}
