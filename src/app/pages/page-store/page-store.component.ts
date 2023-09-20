import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-page-store',
  templateUrl: './page-store.component.html',
  styleUrls: ['./page-store.component.css']
})
export class PageStoreComponent implements OnInit {

  tabStore: Store[] = []

  constructor(private storeService: StoreService) { }
  
  ngOnInit(): void {
    this.storeService.getStore().subscribe((data: Store[]) => {
      this.tabStore = data;
      console.log(this.tabStore)
    })
  }
}


  




