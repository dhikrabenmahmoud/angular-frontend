import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Acceuil} from './acceuil';

@Injectable({
  providedIn: 'root'
})
export class AcceuilService {
  private baseURL = 'http://localhost:8082/api/acceuil';

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getAcceuilList(): observable<Acceuil[]>{
    return this.httpClient.get<Acceuil[]>(`${this.baseURL}`);
  }
  createAcceuil(acceuil: Acceuil): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, acceuil);
  }

  getAcceuilById(id: number): Observable<Acceuil>{
    return this.httpClient.get<Acceuil>(`${this.baseURL}/${id}`);
  }
  updateAcceuil(id: number, acceuil: Acceuil): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, acceuil);
  }
  deleteAcceuil(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
