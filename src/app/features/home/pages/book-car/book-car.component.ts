import { Component, OnInit } from '@angular/core';
import { faCar, faMapMarker, faTable } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss'],
})
export class BookCarComponent implements OnInit {
  carIcon = faCar;
  marker = faMapMarker;
  dateIcon = faTable;

  constructor() {}

  ngOnInit(): void {}
}
