import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Statistique} from './statistique';

@Injectable({
  providedIn: 'root'
})
export class StatistiqueService {
  private baseURL = 'http://localhost:8082/api/statistique';

  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getStatistiqueList(): observable<Statistique[]>{
    return this.httpClient.get<Statistique[]>(`${this.baseURL}`);
  }
  // tslint:disable-next-line:ban-types
  createStatistique(statistique: Statistique): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, statistique);
  }
  getStatistiqueById(id: number): Observable<Statistique>{
    return this.httpClient.get<Statistique>(`${this.baseURL}/${id}`);
  }
  updateStatistique(id: number, statistique: Statistique): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, statistique);
  }
  deleteStatistique(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
