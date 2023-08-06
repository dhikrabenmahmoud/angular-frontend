import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Aboutus} from './aboutus';
@Injectable({
  providedIn: 'root'
})
export class AboutusService {
  private baseURL = 'http://localhost:8082/api/aboutus';

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getAboutUsList(): observable<Aboutus[]>{
    return this.httpClient.get<Aboutus[]>(`${this.baseURL}`);
  }
  createAboutUs(aboutus: Aboutus): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, aboutus);
  }
  getAboutUsById(id: number): Observable<Aboutus>{
    return this.httpClient.get<Aboutus>(`${this.baseURL}/${id}`);
  }
  updateAboutUs(id: number, aboutus: Aboutus): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, aboutus);
  }
  deleteAboutUs(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
