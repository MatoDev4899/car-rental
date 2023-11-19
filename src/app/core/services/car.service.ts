import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from 'src/app/shared/models/Car.model';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  baseUrl = ' http://localhost:5000';

  constructor(private http: HttpClient) {}

  getCarData(): Observable<Car[]> {
    return this.http.get<Car[]>(`${this.baseUrl}/cars`);
  }
}
