import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-page-store',
  templateUrl: './page-store.component.html',
  styleUrls: ['./page-store.component.css']
})
export class PageStoreComponent implements OnInit {

  tabStore: Store[] = []
  categoryId!: string;

  constructor(private storeService: StoreService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.categoryId = params['categoryId'];
      if (!this.categoryId) {
        this.storeService.getStore().subscribe((data: Store[]) => {
          this.tabStore = data;
        })
      } else {
        this.storeService.getStoreByCategory(this.categoryId).subscribe((data: Store[]) => {
          this.tabStore = data;
          console.log(this.tabStore); 
          console.log(this.tabStore.map(e => e.comments[0] ? e.comments[0].note : 0));
        })
      }
    });
  }
}