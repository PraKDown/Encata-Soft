import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  cards = [
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 }
  ];

  constructor() { }

}
