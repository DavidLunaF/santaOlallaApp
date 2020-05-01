import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.sass']
})
export class RestaurantCardComponent {
  @Input() restaurant: any;
  constructor() {
   }
}
