import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Modal } from 'bootstrap';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-connect',
  templateUrl: './page-connect.component.html',
  styleUrls: ['./page-connect.component.css'],
})
export class PageConnectComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userLogin: any = this.loginForm.value; // On récupère les données du formulaire
      console.log('je suis dans le submit, userLogin = ', userLogin);
      this.userService.loginUser(userLogin).subscribe(
        (res: any) => {
          // On envoie l'utilisateur au serveur
          console.log('je suis dans le submit et je récupère res = ', res);
          const token = res.accessToken; // On récupère le token

          // Stocker le token dans le localStorage
          localStorage.setItem('token', token);

          // 2 - Utilisation du behaviour subject (du UserService) pour transmettre la valeur true
          this.userService.setLoggedIn(true);

          // Afficher la modale de succès
          const loginModalElement = document.getElementById(
            'loginModal'
          ) as HTMLElement;
          const loginModal = new Modal(loginModalElement);
          loginModal.show();

          console.log('Token:', token);
        },
        (error) => {
          const errorModalElement = document.getElementById(
            'errorModal'
          ) as HTMLElement;
          const errorModal = new Modal(errorModalElement);
          errorModal.show();
          console.error('Erreur lors de la connexion:', error);
        }
      );
    }
  }
}
