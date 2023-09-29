import { Component, Input, LOCALE_ID, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { UserService } from 'src/app/services/user.service';
import { StoreService } from 'src/app/services/store.service';
import { Store } from 'src/app/models/store';
import { Router } from '@angular/router';
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-admintable',
  templateUrl: './admintable.component.html',
  styleUrls: ['./admintable.component.css'],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
})
export class AdmintableComponent implements OnInit {
  @Input()
  tabUser: User[] = [];
  stores: Store[] = [];
  isModalVisible: boolean = false;
  deletedEntityType: string = ''; // 'user' ou 'store' pour la modal

  constructor(private userService: UserService, private storeService: StoreService, private router: Router) {}
  ngOnInit(): void {
    // ...
    this.storeService.getStore().subscribe((stores) => this.stores = stores);
  }
  deleteStore(id: number): void {
    this.storeService.deleteStore(id).subscribe(
      () => {
        // console.log('Store supprimé avec succès');
        this.deletedEntityType = 'store';
        this.isModalVisible = true; // Affiche la modal
        this.stores = this.stores.filter(store => store.id !== id);
      },
      error => console.error('Erreur lors de la suppression du store', error)
    );
  }
  deleteUser(id: number): void {
    // console.log(id);
    this.userService.softDeleteUser(id).subscribe(
      (response) => {
        // console.log('Soft delete réussi', response);
        this.deletedEntityType = 'user';
        this.isModalVisible = true; // Affiche la modal
      },
      (error) => {
        console.error('Erreur lors du soft delete', error);
      }
    );
  }
 // Fonction pour ouvrir la modal
 showModal() {
  this.isModalVisible = true;
}

// Fonction pour fermer la modal
closeModal() {
  this.isModalVisible = false;
}
//méthode pour naviguer vers le store edit
navigateToEdit(storeId: number) {
  this.router.navigate(['/store-edit', storeId]);
}

}