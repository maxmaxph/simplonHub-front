import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
declare const bootstrap: any;


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private userService: UserService) { }

  closeOffcanvas(offcanvas: any): void {
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
    bsOffcanvas.hide();
  }

  onLogout(): void {
    console.log('Déconnexion');
    this.userService.logout();
  }
}
