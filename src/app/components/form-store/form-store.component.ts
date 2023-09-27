import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';
import { phoneNumberValidator } from 'src/app/vadidators/phone-number.validator';
import jwt_decode from 'jwt-decode';
import { Modal } from 'bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css'],
})
export class FormStoreComponent {
  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private router: Router
  ) {}
  redirectToStore() {
    this.router.navigate(['/store']); // Assurez-vous que la route est correcte.
  }
  formStore: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    phone: ['', [phoneNumberValidator(), Validators.required]],
    number: [''],
    street: [''],
    city: [''],
    zip: [''],
    description: [''],
    web: ['', [Validators.pattern('https?://.+')]], // Validator pour s'assurer que c'est une URL valide.
    map: ['', [Validators.pattern('https?://.+')]], // Validator pour s'assurer que c'est une URL valide.
    image: [''],
    commerce: [false],
    hebergement: [false],
    restauration: [false],
    sortie: [false],
    autre: [false],
  });

  getSelectedCategories(): any[] {
    const formValues = this.formStore.value;
    const categories = [];

    if (formValues.commerce) {
      categories.push({ id: 1, category: 'Commerce' });
    }
    if (formValues.hebergement) {
      categories.push({ id: 2, category: 'Hébergement' });
    }
    if (formValues.restauration) {
      categories.push({ id: 3, category: 'Restauration' });
    }
    if (formValues.sortie) {
      categories.push({ id: 4, category: 'Sortie' });
    }
    if (formValues.autre) {
      categories.push({ id: 5, category: 'Autre' });
    }

    return categories;
  }

  submit() {
    // Envoi du formulaire de création
    const token = localStorage.getItem('token');
    const newStore: Store = this.formStore.value; // On récupère les données du formulaire
    newStore.categories = this.getSelectedCategories(); // On ajoute les catégories sélectionnées
    if (token) {
      const decodedToken: any = jwt_decode(token);
      const userId = decodedToken.userId;
      newStore.user_id = userId; // On ajoute l'id de l'utilisateur
    }

    this.storeService.createStore(newStore).subscribe(() => {
      console.log('mise à jour effectuée');
      const submissionModalElement = document.getElementById(
        'submissionModal'
      ) as HTMLElement;
      const submissionModal = new Modal(submissionModalElement);
      submissionModal.show();
      this.formStore.reset(); // Reset le formulaire si nécessaire
    });
  }
}
