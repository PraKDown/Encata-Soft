import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent {

  @Input() word: string;
  @Output() newStyle = new EventEmitter();

  constructor() { }

  changeStyle(style: string) {
    this.newStyle.emit(style);
  }

}
