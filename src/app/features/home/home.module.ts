import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeroComponent } from './pages/hero/hero.component';
import { BookCarComponent } from './pages/book-car/book-car.component';
import { PlanTripComponent } from './pages/plan-trip/plan-trip.component';
import { PickCarComponent } from './pages/pick-car/pick-car.component';
import { BannerComponent } from './pages/banner/banner.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { DownloadComponent } from './pages/download/download.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from 'src/app/shared/components/footer/footer.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    BookCarComponent,
    PlanTripComponent,
    PickCarComponent,
    BannerComponent,
    TestimonialsComponent,
    DownloadComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
})
export class HomeModule {}
