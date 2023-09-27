import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ChangeDetectorRef } from '@angular/core';
import * as bootstrap from 'bootstrap';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthGuard } from 'src/app/guards/auth-guard.guard';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  roleId: number | undefined;
  isUserLoggedIn = false;
 
  constructor(private userService: UserService, private authGuard :AuthGuard, private cdr: ChangeDetectorRef ) {}
  //admin en fonction du role ID
  ngOnInit() {
    this.authGuard.initializeUser();

    // 3 - subscribe au behaviour subject (de UserService) pour mettre à jour la valeur de isUserLoggedIn 
    this.authGuard.currentUser.subscribe(user => {
      this.roleId = user.roleId;
      this.isUserLoggedIn = !!user;
      this.cdr.detectChanges(); // Forcer la détection de changements
    });
}
  // methode pour fermer le menu à l'evenement click de se connecter
  closeOffcanvas(offcanvas: any): void {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    if (bsOffcanvas) {
      bsOffcanvas.hide();
    }

    // je retire la classe 'show' pour cacher l'overlay
    const overlay = document.querySelector('.offcanvas-backdrop.fade.show');
    if (overlay) {
      overlay.classList.remove('show');
    }
  }

  onLinkClick(offcanvas: any): void {
    this.closeOffcanvas(offcanvas);
  }

  //methode  de déconnection
  onLogout(): void {
    console.log('Tentative de déconnexion');
    this.userService.logout();
    this.isUserLoggedIn = !this.isUserLoggedIn; // 
    console.log('je suis dans onlogout isuserloggedin : ', this.isUserLoggedIn);

    console.log('Déconnexion réussie');
  }
}
