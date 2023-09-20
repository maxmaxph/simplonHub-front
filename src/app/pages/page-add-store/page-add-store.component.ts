import { Component } from '@angular/core';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-page-add-store',
  templateUrl: './page-add-store.component.html',
  styleUrls: ['./page-add-store.component.css']
})
export class PageAddStoreComponent {
  tabCategorie: string[] = [];

  constructor(private storeService: StoreService) { }

  ngOnInit(): void {
  }

}
