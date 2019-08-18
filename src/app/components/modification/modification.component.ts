import { Component } from '@angular/core';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent {

  word: string;
  result = {
    size: 16,
    color: 'white',
    style: 'normal'
  };

  constructor() { }

  changeWord(word) {
    this.word = word;
  }
}
