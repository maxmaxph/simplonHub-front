import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-page-store',
  templateUrl: './page-store.component.html',
  styleUrls: ['./page-store.component.css'],
})
export class PageStoreComponent implements OnInit {
  tabStore: Store[] = [];

  constructor(
    private storeService: StoreService,
    
  ) {}
  ngOnInit(): void {
    this.storeService.getStore().subscribe((data: Store[]) => {
      this.tabStore = data;
      console.log(this.tabStore);

      console.log(
        this.tabStore.map((e) => (e.comments[0] ? e.comments[0].note : 0))
      );
    });
  }
}
