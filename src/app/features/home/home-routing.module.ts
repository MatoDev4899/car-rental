import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeRoutingModule {}
