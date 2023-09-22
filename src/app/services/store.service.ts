import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InterfaceStore } from '../models/store.interface';
import { Observable, map } from 'rxjs';
import { Store } from '../models/store';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  url: string = 'http://localhost:3000/api/store';

  constructor(private http: HttpClient) {}

  getStore() {
    return this.http.get<Store[]>(this.url);
  }
// je cree une methode pour recuperer mes stores par leur ID
  getStoreById(id: number): Observable<Store> {
    return this.http.get<Store>(`${this.url}/${id}`);
  }



  createStore(newStore: Store): Observable<any> {
    // On envoie la nouvelle plante au serveur
    console.log(newStore);
    const token = localStorage.getItem('token'); // On récupère le token dans le localStorage
    return this.http.post(this.url, newStore, {
      headers: { Authorization: `Bearer ${token}` },
    }); // On envoie le token dans le header de la requête
  }
}