import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() elements: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() elementClick = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isActiveElement(element: any): boolean {
    return element.active === 1;
  }

  onClick(element: any) {
    this.elementClick.emit(element);
  }

}
