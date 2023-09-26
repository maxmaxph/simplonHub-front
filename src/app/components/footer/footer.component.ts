import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  isUserLoggedIn = false;
  constructor(private userService: UserService, private router: Router) {}
  //methode pour scroller vers les differentes ancres sur la page infos
  scrollToAnchor(anchor: string): void {
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
  onLogout(): void {
    console.log('Tentative de déconnexion');
    this.userService.logout();
    this.isUserLoggedIn = !this.isUserLoggedIn; // Mettez à jour l'état de connexion
   

    console.log('Déconnexion réussie');
    this.router.navigate(['/']);
  }
}