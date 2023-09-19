import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthGuardService, private router: Router) {}

  canActivate( // On vérifie si le token est valide
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
  ): Observable<boolean> { // On retourne un boolean
    console.log("je suis dans le guard");
    
    const token = localStorage.getItem('token'); // token dans le localStorage

    if (!token) { // Si le token ou l'email n'existe pas dans le localStorage
      this.router.navigate(['/login']); // On redirige vers la page de login
      return of(false); // On utilise of pour retourner un Observable
    }

    return this.authService.validateToken(token).pipe( // On valide le token
      map(response => { 
        console.log('je suis dans le guard et la reponse du service : ', response);
        if (response && response.valid === true) { // Si le token est valide
          console.log('je suis dans le guard et le token est valide');  
          return true;
        }else { // Si le token n'est pas valide
          console.log('je suis dans le guard es le token invalide');
          this.router.navigate(['/login']);
          return false;          
        }
      }),
      catchError(error => { // Si le token n'est pas valide
        console.error('Erreur lors de la validation du token:', error);
        this.router.navigate(['/login'], { queryParams: { message: 'Token validation failed' } }); // On redirige vers la page de login
        return of(false);
      })
    );
}
}