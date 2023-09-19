import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-page-connect',
  templateUrl: './page-connect.component.html',
  styleUrls: ['./page-connect.component.css']
})
export class PageConnectComponent {
    loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const userLogin: any = this.loginForm.value; // On récupère les données du formulaire
      this.userService.loginUser(userLogin).subscribe((res) => { // On envoie l'utilisateur au serveur      
      const token = res.accessToken; // On récupère le token

      // Stocker le token dans le localStorage
      localStorage.setItem('token', token);

      console.log('Token:', token);
      });
    }
  }
}
