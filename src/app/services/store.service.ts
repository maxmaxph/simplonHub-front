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
    return this.http.get<Store[]>(this.url)
  };

   createStore(newStore: Store): Observable<any> { // On envoie la nouvelle plante au serveur
    console.log(newStore);
    const token = localStorage.getItem('token'); // On récupère le token dans le localStorage
    return this.http.post(this.url, newStore, {headers : { 'Authorization': `Bearer ${token}`}}); // On envoie le token dans le header de la requête
  }
}
