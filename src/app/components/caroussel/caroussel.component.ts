import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {
  isUserLoggedIn = false; 
  constructor(private authGuardService: AuthGuardService) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if(token) { // Ajouté pour éviter de passer null si le token n'est pas dans le localStorage
      this.authGuardService.validateToken(token).subscribe((response) => { // changé 'token' à token
        if (response) {
          this.isUserLoggedIn = true;
        }
      });
    }
}
}
