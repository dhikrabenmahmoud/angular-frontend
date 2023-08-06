import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Contactus} from './contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {
  private baseURL = 'http://localhost:8082/api/contactus';
  constructor(private httpClient: HttpClient) { }
  // @ts-ignore

  getContactUsList(): observable<Contactus[]>{
    return this.httpClient.get<Contactus[]>(`${this.baseURL}`);
  }
  createContactus(contactus: Contactus): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, contactus);
  }

  getContactusById(id: number) {
    return this.httpClient.get<Contactus>(`${this.baseURL}/${id}`);
  }

  updateContactus(id: number, contactus: Contactus): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, contactus);
  }


  deleteContactus(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
