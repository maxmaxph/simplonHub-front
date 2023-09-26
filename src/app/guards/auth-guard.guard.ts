import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  private currentUserSubject = new BehaviorSubject<any>({});
  public currentUser = this.currentUserSubject.asObservable();

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

    return this.authService.validateToken(token).pipe(
    map(response => { 
      console.log('je suis dans le guard et la reponse du service : ', response);

      // Vérifiez d'abord la validité du token
      if (!response || response.valid !== true) { 
        console.log('je suis dans le guard et le token est invalide');
        this.router.navigate(['/login']);
        return false;
      }

      // Ensuite, vérifiez si l'utilisateur est supprimé
      if (response.isDeleted === true) {
        console.log('je suis dans le guard et l\'utilisateur est supprimé');  
        this.router.navigate(['/login'], { queryParams: { message: 'User account is deactivated' } });
        return false;
      }

      console.log('je suis dans le guard et le token est valide');  
      return true;
      }),
      catchError(error => {
        console.error('Erreur lors de la validation du token:', error);
        this.router.navigate(['/login'], { queryParams: { message: 'Token validation failed' } }); 
        return of(false);
      })
    );
    
  } 
  // Methode pour decoder le token 
  setUserFromToken(token: string): void {
    console.log('setUserFromToken is called');
    const decodedToken: any = jwtDecode(token);
    console.log('decodedToken:', decodedToken);
    this.currentUserSubject.next(decodedToken);
  }
  initializeUser() {
    const token = localStorage.getItem('token');
    if (token) {
      this.setUserFromToken(token);
    }
}
}