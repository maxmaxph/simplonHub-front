import { Component, Input } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input()
  store!: any;
  imageUrl!: string; // Pour stocker l'URL de l'image obtenue

  constructor(private storeService: StoreService) {} // Injectez le service

  ngOnChanges() {
    if (
      this.store &&
      this.store.categories &&
      this.store.categories.length > 0
    ) {
      this.imageUrl = this.storeService.getCategoryImageById(
        this.store.categories[0].id.toString()
      );
    }
  }
}
