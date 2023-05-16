import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VehiclesComponent } from './vehicles.component';

const routes: Routes = [
  {
    path: '',
    component: VehiclesComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class VehiclesRoutingModule {}
