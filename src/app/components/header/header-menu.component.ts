import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss']
})
export class HeaderMenuComponent implements OnInit {

  @Output() swapPage = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  swap(path) {
    this.swapPage.emit(path);
  }
}
