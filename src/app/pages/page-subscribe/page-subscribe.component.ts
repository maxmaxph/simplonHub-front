import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import * as bootstrap from 'bootstrap'

@Component({
  selector: 'app-page-subscribe',
  templateUrl: './page-subscribe.component.html',
  styleUrls: ['./page-subscribe.component.css'],
})
export class PageSubscribeComponent {
  inscriptionForm = this.fb.group({
    // On crée un groupe de champs
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    pseudo: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    phone: ['', phoneNumberValidator()],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.inscriptionForm.valid) {
      const newUser: any = this.inscriptionForm.value; // On récupère les données du formulaire
      console.log('je suis dans le submit, newUser = ', newUser);
      this.userService.subscribe(newUser).subscribe(() => {
        // On envoie les données du formulaire au serveur
        console.log('mise à jour effectué');
      });

      this.inscriptionForm.reset(); // On vide le formulaire
    }
     const modalElement = document.getElementById('subscribeModal');
     const modalInstance = new bootstrap.Modal(modalElement!);
     modalInstance.show();
  }

  goToHome() {
    close();
    window.location.href = 'login';
  }
  }

function phoneNumberValidator(): any {
  throw new Error('Function not implemented.');
}

