import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialsComponent } from './testimonials.component';
import { TestimonialsRoutingModule } from './testimonials-routing.module';

@NgModule({
  declarations: [TestimonialsComponent],
  imports: [CommonModule, TestimonialsRoutingModule],
})
export class TestimonialsModule {}
