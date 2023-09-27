import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthGuardService } from '../services/auth-guard.service';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthGuardService, private router: Router) {}

  canActivate(
    // On vérifie si le token est valide
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    // On retourne un boolean
    console.log('je suis dans le guard');

    const token = localStorage.getItem('token'); // token dans le localStorage

    if (!token) {
      // Si le token ou l'email n'existe pas dans le localStorage
      this.router.navigate(['/login']); // On redirige vers la page de login
      return of(false); // On utilise of pour retourner un Observable
    }

    return this.authService.validateToken(token).pipe(
      map((response) => {
        console.log(
          'je suis dans le guard et la reponse du service : ',
          response
        );

        // recupération des données dans le token
        const decodedToken: any = jwtDecode(token);
        console.log('decodedToken:', decodedToken);

        // Vérifiez d'abord la validité du token
        if (!response || response.valid !== true) {
          console.log('je suis dans le guard et le token est invalide');
          this.router.navigate(['/login']);
          return false;
        }

        // Ensuite, vérifiez si le rôle est admin
        if (decodedToken.roleId !== 2) {
          console.log("je suis dans le guard et l'utilisateur n'est pas admin");
          this.router.navigate(['/']);
          return false;
        }

        // Ensuite, vérifiez si l'utilisateur est supprimé
        if (response.isDeleted === true) {
          console.log("je suis dans le guard et l'utilisateur est supprimé");
          this.router.navigate(['/login'], {
            queryParams: { message: 'User account is deactivated' },
          });
          return false;
        }

        console.log('je suis dans le guard et le token est valide');
        return true;
      }),
      catchError((error) => {
        console.error('Erreur lors de la validation du token:', error);
        this.router.navigate(['/login'], {
          queryParams: { message: 'Token validation failed' },
        });
        return of(false);
      })
    );
  }
}
