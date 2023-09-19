import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {

  constructor(private userService : UserService){}
  //methode pour scroller vers les differentes ancres sur la page infos
  scrollToAnchor(anchor: string): void {
    setTimeout(() => {
      const element = document.getElementById(anchor);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }, 0);
  }
  //methode  de déconnexion
  onLogout(): void {
    console.log('Tentative de déconnexion');
    this.userService.logout();
    console.log('déconnexion réussie');
  }
}
