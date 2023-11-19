import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/Car.model';

@Component({
  selector: 'app-pick-car',
  templateUrl: './pick-car.component.html',
  styleUrls: ['./pick-car.component.scss'],
})
export class PickCarComponent {
  @Input() cars: Observable<Car[]> | undefined;
  @Output() reserveCar = new EventEmitter();

  selectedCar: Car = {
    name: 'Audi A5 S-line',
    imagePath: 'assets/images/cars/audi.png',
    brand: 'Audi',
    make: 'A5',
    year: 2015,
    ac: 'Yes',
    transmission: 'Automatic',
    fuel: 'Diesel',
    price: 45,
  };
  imagePath: string = 'assets/images/cars/audi.png';

  constructor() {}

  selectCar(car: Car) {
    this.selectedCar = car;
    this.imagePath = car.imagePath;
  }

  reserve(fragment: string) {
    this.reserveCar.emit(fragment);
  }
}
