import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';
import { phoneNumberValidator } from 'src/app/validators/phone-number.validator';
import jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-form-store',
  templateUrl: './form-store.component.html',
  styleUrls: ['./form-store.component.css']
})
export class FormStoreComponent {

  constructor(private formBuilder: FormBuilder, private storeService: StoreService) { }
  
  formStore: FormGroup = this.formBuilder.group({
 
    name: ['', [Validators.required ]],
    phone: ['', [phoneNumberValidator()]],
    street: [''],
    city: [''],
    zip: [''],
    description: [''],
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
      categories.push({ id: 1, category: "Commerce" });
    }
    if (formValues.hebergement) {
      categories.push({ id: 2, category: "Hébergement" });
    }
    if (formValues.restauration) {
      categories.push({ id: 3, category: "Restauration" });
    }
    if (formValues.sortie) {
      categories.push({ id: 4, category: "Sortie" });
    }
    if (formValues.autre) {
      categories.push({ id: 5, category: "Autre" });
    }

    return categories;
  }

    submit() { // Envoi du formulaire de création d'une nouvelle plante
      const token = localStorage.getItem('token');
      const newStore: Store = this.formStore.value; // On récupère les données du formulaire
      newStore.categories = this.getSelectedCategories(); // On ajoute les catégories sélectionnées
      if (token) {
        const decodedToken: any = jwt_decode(token);
        const userId = decodedToken.userId;
        newStore.user_id = userId; // On ajoute l'id de l'utilisateur
      }
      this.storeService.createStore(newStore).subscribe(() => { 
        console.log("mise à jour effectué");  
        console.log("submit form store", this.formStore.value);
        this.formStore.reset(); // On vide le formulaire
      })
  }
}
