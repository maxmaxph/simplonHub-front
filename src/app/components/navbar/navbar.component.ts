import { Component } from '@angular/core';
declare const bootstrap: any;
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  // methode pour fermer le menu à l'evenement click de se connecter
  closeOffcanvas(offcanvas: any): void {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    bsOffcanvas.hide();
  }
}
