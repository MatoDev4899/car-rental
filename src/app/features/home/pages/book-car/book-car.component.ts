import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { faCar, faMapMarker, faTable } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/Car.model';

@Component({
  selector: 'app-book-car',
  templateUrl: './book-car.component.html',
  styleUrls: ['./book-car.component.scss'],
})
export class BookCarComponent implements OnInit {
  carIcon = faCar;
  marker = faMapMarker;
  dateIcon = faTable;
  @Input() cars: Observable<Car[]> | undefined;
  locations: string[] = [];

  bookCar = this.fb.nonNullable.group({
    car: ['', Validators.required],
    pickUpLocation: ['', Validators.required],
    dropOffLocation: ['', Validators.required],
    pickUpDate: [null, Validators.required],
    dropOffDate: [null, Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    if (this.bookCar.invalid) {
      this.bookCar.markAsDirty;
      return;
    }
    console.log(this.bookCar.value);
  }

  ngOnInit(): void {
    this.locations = ['Vienna', 'Bratislava', 'Trencin', 'Zilina', 'Kosice'];
  }
}
