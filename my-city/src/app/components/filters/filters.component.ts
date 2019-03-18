import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IFilterButtonsData } from '../../models/interfaces';


@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {
  @Input() elements: any;
  @Input() searchField: boolean;
  @Input() buttonFields: IFilterButtonsData[];
  @Output() selectedFields = new EventEmitter();
  itemsSelected = {searchText: ''};
  constructor() { }

  ngOnInit() {
  }

  onSearchInput($event) {
    const text = $event.target.value;
    this.itemsSelected.searchText = text;
    this.sendOutput();
  }

  fieldSelect(code: string, value: any) {
    if (!this.itemsSelected[code]) {
      this.itemsSelected[code] = [];
    }
    const valueIndex = this.itemsSelected[code].indexOf(value);
    if (valueIndex === -1) {
      this.itemsSelected[code].push(value);
    } else {
      this.itemsSelected[code].splice(valueIndex, 1);
    }
    this.sendOutput();
  }

  valueSelected(code: string, value: any) {
    return this.itemsSelected[code] && this.itemsSelected[code].indexOf(value) !== -1;
  }

  sendOutput() {
    this.selectedFields.emit(this.itemsSelected);
  }
}
