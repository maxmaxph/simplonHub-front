import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '../models/store';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  url = 'http://localhost:3000/api/store';

  constructor(private http: HttpClient) { }

  getStore(){
    return this.http.get<Store[]>(`${this.url}/filter`)
  };

  // je cree une methode pour recuperer mes stores par leur ID
  getStoreById(id: number): Observable<Store> {
    return this.http.get<Store>(`${this.url}/${id}`);
  }

   createStore(newStore: Store): Observable<any> { // On envoie la nouvelle plante au serveur
    console.log(newStore);
    return this.http.post(this.url, newStore); // On envoie le token dans le header de la requête
  }

  getStoreByCategory(categoryId: string): Observable<Store[]> {
    const urlWithCategory = `${this.url}/filter/${categoryId}`;
    return this.http.get<Store[]>(urlWithCategory);
  }
}
