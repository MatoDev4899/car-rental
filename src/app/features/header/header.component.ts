import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links = [
    {
      name: 'Home',
      route: 'home',
    },
    {
      name: 'About',
      route: 'about',
    },
    {
      name: 'Vehicles',
      route: 'vehicles',
    },
    {
      name: 'Testimonials',
      route: 'testimonials',
    },
    {
      name: 'Our Team',
      route: 'team',
    },
    {
      name: 'Contact',
      route: 'contact',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
