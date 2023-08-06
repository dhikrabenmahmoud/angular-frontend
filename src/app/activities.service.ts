import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, observable} from 'rxjs';
import {Activities} from './activities';
import {Produit} from "./produit";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private baseURL = 'http://localhost:8082/api/activities';


  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getActivitiesList(): observable<Activities[]>{
    return this.httpClient.get<Activities[]>(`${this.baseURL}`);
  }
  createActivities(activities: Activities): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, activities);
  }

  getActivitiesById(id: number): Observable<Activities>{
    return this.httpClient.get<Activities>(`${this.baseURL}/${id}`);
  }
  updateActivities(id: number, activities: Activities): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, activities);
  }
  deleteActivities(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
