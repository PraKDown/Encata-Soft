import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.scss']
})
export class SizeComponent {

  @Input() word: string;
  @Output() newSize = new EventEmitter();

  constructor() { }

  changeSize(size: number) {
    this.newSize.emit(size);
  }

}
