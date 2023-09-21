import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  private readonly apiUrl = 'http://localhost:3000/api/auth/checktoken';  // URL api

  constructor(private http: HttpClient) {}

  validateToken(token: string): Observable<any> { 
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  });

  const options = { headers: headers };

  return this.http.post(`${this.apiUrl}`, {}, options).pipe(
    map(response => { 
      console.log('je suis dans guard service et la reponse du serveur', response);
      return response;
    }),
    catchError(error => { 
      console.error('Erreur lors de la validation du token:', error);
      return throwError('Une erreur est survenue lors de la validation du token.');
    })
  );
}







}