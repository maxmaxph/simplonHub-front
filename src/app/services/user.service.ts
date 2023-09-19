import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private readonly http: HttpClient, private router: Router) { }
  url: string = `http://localhost:3000/api/`;

  loginUser(user: any): Observable<any> { // On envoie l'utilisateur au serveur
      console.log("connexion");
      
      return this.http.post(`${this.url}auth/login`, user);
  }

  subscribe(user: any): Observable<any> { // On envoie l'utilisateur au serveur
      return this.http.post(`${this.url}auth/register`, user);
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }
}
