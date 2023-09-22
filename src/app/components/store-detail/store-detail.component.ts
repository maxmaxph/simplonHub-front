import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.css']
})
// store-detail.component.ts
export class StoreDetailComponent implements OnInit {
  store: Store | null = null;

  constructor(private route: ActivatedRoute, private storeService: StoreService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.storeService.getStoreById(+id).subscribe((store) => {
        this.store = store;
      });
    }
  }
}

