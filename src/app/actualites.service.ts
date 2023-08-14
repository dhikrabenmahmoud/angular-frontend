import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, observable} from "rxjs";
import {Produit} from "./produit";
import {Actualites} from "./actualites";

@Injectable({
  providedIn: 'root'
})
export class ActualitesService {
  private baseURL = 'http://localhost:8082/api/actualites';

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getActualitesList(): observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}`);
  }
  // tslint:disable-next-line:ban-types
  createActualites(actualites: Actualites): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, actualites);
  }
  getActualitesById(id: number): Observable<Actualites>{
    return this.httpClient.get<Actualites>(`${this.baseURL}/${id}`);
  }
  updateActualites(id: number, actualites: Actualites): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, actualites);
  }
  deleteActualites(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
