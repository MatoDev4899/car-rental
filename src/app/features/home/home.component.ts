import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarService } from 'src/app/core/services/car.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cars$ = this.carService.getCarData();

  constructor(
    private carService: CarService,
    private router: Router,
    private route: ActivatedRoute,
    private viewportScroller: ViewportScroller
  ) {}

  ngOnInit(): void {}

  onReserveClick(fragment: string) {
    this.router.navigate([], { fragment: fragment });
    this.route.fragment.subscribe((fragment) => {
      if (fragment) {
        this.viewportScroller.scrollToAnchor(fragment);
      }
    });
  }
}
