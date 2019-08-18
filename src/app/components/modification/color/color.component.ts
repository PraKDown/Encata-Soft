import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent {

  @Input() word: string;
  @Output() newColor = new EventEmitter();

  constructor() { }

  changeColor(color: string) {
    this.newColor.emit(color);
  }

}
