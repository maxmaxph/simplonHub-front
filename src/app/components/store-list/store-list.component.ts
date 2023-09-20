import { Component, Input, OnInit } from '@angular/core';
import { Store } from 'src/app/models/store';
import { Comment } from 'src/app/models/comment';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent implements OnInit {
  @Input() stores!: Store[];

  ngOnInit(): void {

  }
  
  

}
