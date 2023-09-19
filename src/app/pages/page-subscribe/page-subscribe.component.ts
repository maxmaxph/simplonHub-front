import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { phoneNumberValidator } from 'src/app/validators/phone-number.validator';

@Component({
  selector: 'app-page-subscribe',
  templateUrl: './page-subscribe.component.html',
  styleUrls: ['./page-subscribe.component.css']
})
export class PageSubscribeComponent {
  inscriptionForm = this.fb.group({ // On crée un groupe de champs
    name: ['', Validators.required],
    firstname: ['', Validators.required],
    pseudo: ['', Validators.required],
    mail: ['', [Validators.required, Validators.email]],
    phone: ['',  phoneNumberValidator()],
    password: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UserService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    if (this.inscriptionForm.valid) {
      const newUser: any = this.inscriptionForm.value; // On récupère les données du formulaire
      this.userService.subscribe(newUser).subscribe((res) => {
        console.log(res);
        
        // On envoie les données du formulaire au serveur
        console.log('mise à jour effectué');
      });
  
      this.inscriptionForm.reset(); // On vide le formulaire
      }
  }
}

