import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, throwError } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  private readonly apiUrl = 'http://localhost:3000/api/auth/checktoken'; // URL api
  //detection role du user

   constructor(private http: HttpClient) {}

  

  validateToken(token: string): Observable<any> {
    // On envoie le token et l'email au serveur pour vérifier si le token est valide
    const headers = new HttpHeaders({
      // On envoie le token dans le header de la requête
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    });

    return this.http.post(`${this.apiUrl}`,{}, { headers }).pipe(
      map((response) => {
        // On retourne la réponse du serveur
      
        return response;
      }),
      catchError((error) => {
        // Si le token n'est pas valide
        console.error('Erreur lors de la validation du token:', error);
        return throwError(
          'Une erreur est survenue lors de la validation du token.'
        );
      })
    );
  }
}