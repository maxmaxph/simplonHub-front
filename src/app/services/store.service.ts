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
 
// Ici, vous mappez les IDs de catégories aux URL des images
categoryImages: { [key: string]: string } = {
  "1": "assets/img/img_category/commerce.jpg",
  "2": "assets/img/img_category/hebergement.jpg",
  "3": "assets/img/img_category/restaurant.jpg",
  "4": "assets/img/img_category/sortie.jpg",
  "5": "assets/img/img_category/autre.jpg"
};
  constructor(private http: HttpClient) {}
  getStore(){
    return this.http.get<Store[]>(`${this.url}/filter`)
  };
  getCategoryImageById(categoryId: string): string {
    // Cette méthode renvoie l'URL de l'image basée sur l'ID de la catégorie
    return this.categoryImages[categoryId] || 'assets/img/img_category/default.jpg'; // Si aucun match, renvoyez une image par défaut
  }
// je cree une methode pour recuperer mes stores par leur ID
  getStoreById(id: number): Observable<Store> {
    return this.http.get<Store>(`${this.url}/${id}`);
  }
  // je cree une methode pour recuperer mes stores par leur category
  getStoreByCategory(categoryId: string): Observable<Store[]> {
    const urlWithCategory = `${this.url}/filter/${categoryId}`;
    return this.http.get<Store[]>(urlWithCategory);
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