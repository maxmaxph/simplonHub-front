import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
export class StoreDetailComponent implements OnInit {
  store: Store | null = null;
  imageUrl!: string;

  
  constructor(
    private route: ActivatedRoute, 
    private storeService: StoreService, 
      ) {}

      ngOnInit() {
        const storeId = this.route.snapshot.paramMap.get('id'); // ou tout autre moyen d'obtenir l'ID du store
        if(storeId) {
          this.storeService.getStoreById(+storeId).subscribe(store => {
            this.store = store;
            if(this.store && this.store.categories && this.store.categories.length > 0) {
              this.imageUrl = this.storeService.getCategoryImageById(this.store.categories[0].id.toString());
              }
          });
        }
      }

  // Méthode pour revenir à la page précédente
  goBack() {
    window.history.back();
  }

  }

