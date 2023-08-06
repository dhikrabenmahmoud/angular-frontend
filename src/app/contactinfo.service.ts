import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Contactinfo} from './contactinfo';
import {Contactus} from "./contactus";

@Injectable({
  providedIn: 'root'
})
export class ContactinfoService {
  private baseURL = 'http://localhost:8082/api/contactinfo';

  constructor(private httpClient: HttpClient) {
  }
  // @ts-ignore
  getContactInfoList(): observable<Contactinfo[]>{
    return this.httpClient.get<Contactinfo[]>(`${this.baseURL}`);
  }

  createContactinfo(contactinfo: Contactinfo): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, contactinfo);
  }
  getContactinfoById(id: number) {
    return this.httpClient.get<Contactinfo>(`${this.baseURL}/${id}`);
  }
  updateContactinfo(id: number, contactinfo: Contactinfo): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, contactinfo);
  }
  deleteContactinfo(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
