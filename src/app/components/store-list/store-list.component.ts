import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  @Input() stores!: Store[];
  @Input() categoryId!: string;

  constructor(private storeService: StoreService) { }

  ngOnChanges() {
  if (this.categoryId) {
    this.fetchStores();
  }
  }

  fetchStores() {
  this.storeService.getStoreByCategory(this.categoryId).subscribe((stores) => {
    // console.log('je suis dans le fetchStores et j\'ai récupéré les stores', stores);

    // Calculez la note moyenne pour chaque store // OPTION D'AMELIORATION
    stores.forEach(store => {
      if (store.comments && store.comments.length > 0) {
        const totalNotes = store.comments.reduce((acc: any, comment: { note: any; }) => acc + comment.note, 0);
        store.averageNote = Math.round(totalNotes / store.comments.length); // On arrondit à 1 décimale
      } else {
        store.averageNote = "Pas de note"; 
      }
    });

    this.stores = stores;
  });
}

}