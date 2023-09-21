import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';
import { phoneNumberValidator } from 'src/app/validators/phone-number.validator';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css'],
})
export class FormStoreComponent {
  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService
  ) {}

  formStore: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    phone: ['', [phoneNumberValidator()]],
    street: [''],
    city: [''],
    zip: [''],
    description: [''],
    category: ['', [Validators.required]],
    image: [''],
  });

  submit() {
    // Envoi du formulaire de création d'une nouvelle plante
    const newStore: Store = this.formStore.value; // On récupère les données du formulaire
    this.storeService.createStore(newStore).subscribe(() => {
      console.log('mise à jour effectué');
      console.log('submit form store', this.formStore.value);
      this.formStore.reset(); // On vide le formulaire
    });
  }
}
