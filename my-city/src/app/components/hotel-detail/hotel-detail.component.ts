import { Component, OnInit, Input } from '@angular/core';
import { IHotelItem } from '../../models/interfaces';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css']
})
export class HotelDetailComponent implements OnInit {
  @Input() hotel: IHotelItem;

  constructor() { }

  ngOnInit() {
  }
}
