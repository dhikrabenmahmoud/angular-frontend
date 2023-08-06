import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import { Produit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {
private baseURL = 'http://localhost:8082/api/products';
  constructor(private httpClient: HttpClient) { }

  // @ts-ignore
  getProduitList(): observable<Produit[]>{
    return this.httpClient.get<Produit[]>(`${this.baseURL}`);
  }
  // tslint:disable-next-line:ban-types
  createProduct(produit: Produit): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, produit);
  }
  getProductById(id: number): Observable<Produit>{
    return this.httpClient.get<Produit>(`${this.baseURL}/${id}`);
  }
  updateProduit(id: number, produit: Produit): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${id}`, produit);
  }
  deleteProduct(id: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
