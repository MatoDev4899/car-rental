import { Component, OnInit } from '@angular/core';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  quote = faQuoteRight;

  constructor() {}

  ngOnInit(): void {}
}
