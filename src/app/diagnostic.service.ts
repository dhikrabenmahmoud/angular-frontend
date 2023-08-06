import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from "rxjs";
import {Produit} from "./produit";
import {Diagnostic} from "./diagnostic";

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {
  private baseURL = 'http://localhost:8082/api/diagnostic';

  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  getDiagnosticList(): observable<Diagnostic[]>{
    return this.httpClient.get<Diagnostic[]>(`${this.baseURL}`);
  }
  // tslint:disable-next-line:ban-types
  createDiagnostic(diagnostic: Diagnostic): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, diagnostic);
  }
  getDiagnosticById(id: number): Observable<Diagnostic>{
    return this.httpClient.get<Diagnostic>(`${this.baseURL}/${id}`);
  }
  updateDiagnostic(id: number, diagnostic: Diagnostic): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, diagnostic);
  }
  deleteDiagnostic(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
