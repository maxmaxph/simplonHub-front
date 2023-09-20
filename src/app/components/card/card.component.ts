import { Component, Input } from '@angular/core';
import { Store } from 'src/app/models/store';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  @Input()
  stores!: Store[];
}

