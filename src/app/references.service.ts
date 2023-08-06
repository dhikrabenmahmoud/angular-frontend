import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {References} from './references';
import {Produit} from "./produit";

@Injectable({
  providedIn: 'root'
})
export class ReferencesService {
  private baseURL = 'http://localhost:8082/api/reference';
  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getReferencesList(): observable<References[]>{
    return this.httpClient.get<References[]>(`${this.baseURL}`);
  }
  createReferences(references: References): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, references);
  }
  getReferencetById(id: number): Observable<References>{
    return this.httpClient.get<References>(`${this.baseURL}/${id}`);
  }
  updateReferences(id: number, references: References): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, references);
  }
  deleteReference(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
