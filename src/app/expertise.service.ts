import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from "rxjs";
import {Acceuil} from "./acceuil";
import {Expertise} from "./expertise";

@Injectable({
  providedIn: 'root'
})
export class ExpertiseService {
  private baseURL = 'http://localhost:8082/api/expertise';

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getExpertiseList(): observable<Expertise[]>{
    return this.httpClient.get<Expertise[]>(`${this.baseURL}`);
  }
  createExpertise(expertise: Expertise): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, expertise);
  }

  getExpertiseById(id: number): Observable<Expertise>{
    return this.httpClient.get<Expertise>(`${this.baseURL}/${id}`);
  }
  updateExpertise(id: number, expertise: Expertise): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, expertise);
  }
  deleteExpertise(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
