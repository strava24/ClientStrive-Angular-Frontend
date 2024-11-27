import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http: HttpClient) { }
  
  getAllDesignation() {
    return this.http.get<IResponse>("https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation");
  }

}