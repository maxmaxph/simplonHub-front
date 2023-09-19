import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare const bootstrap: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isUserLoggedIn = false;
  constructor(private userService: UserService) {}

  ngOnInit() {
    // je suis l'état de connection de l'usager
    console.log('isuserLoggedIn', this.isUserLoggedIn);

    this.isUserLoggedIn = !!localStorage.getItem('token');
  }
  // methode pour fermer le menu à l'evenement click de se connecter
  closeOffcanvas(offcanvas: any): void {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    bsOffcanvas.hide();

    // je retire la classe 'show' pour cacher l'overlay
    const overlay = document.querySelector('.offcanvas-backdrop.fade.show');
    if (overlay) {
      overlay.classList.remove('show');
    }
  }

  //methode  de déconnection
  onLogout(): void {
    console.log('Tentative de déconnexion');
    this.userService.logout();
    this.isUserLoggedIn = !this.isUserLoggedIn; // Mettez à jour l'état de connexion
    console.log('je suis dans onlogout isuserloggedin : ', this.isUserLoggedIn);

    console.log('Déconnexion réussie');
  }
}
