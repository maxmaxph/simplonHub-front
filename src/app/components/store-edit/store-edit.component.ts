import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/models/store';
import { phoneNumberValidator } from 'src/app/vadidators/phone-number.validator';

@Component({
  selector: 'app-store-edit',
  templateUrl: './store-edit.component.html',
  styleUrls: ['./store-edit.component.css']
})
export class StoreEditComponent implements OnInit {
  store: Store | null = null;

  constructor(
    private fb: FormBuilder,
    private storeService: StoreService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  storeForm: FormGroup = this.fb.group({
 
    name: ['', [Validators.required ]],
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
    const formValues = this.storeForm.value;
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
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.storeService.getStoreById(id).subscribe(store => {
        this.store = store;
        this.storeForm.patchValue(store);
      });
    });
  }

  onSubmit(): void {
    if (this.storeForm.valid && this.store) {
      const updatedStore: Store = { ...this.store, ...this.storeForm.value, categories: this.getSelectedCategories() };
      this.storeService.updateStore(updatedStore).subscribe(() => {
        console.log(updatedStore);
        this.router.navigate(['/admin']); // redirige vers la page d'accueil ou une autre route après la mise à jour
      });
    }
  }
}