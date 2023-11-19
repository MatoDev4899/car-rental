import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    loadChildren: () =>
      import('./features/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'vehicles',
    loadChildren: () =>
      import('./features/vehicles/vehicles.module').then(
        (m) => m.VehiclesModule
      ),
  },
  {
    path: 'testimonials',
    loadChildren: () =>
      import('./features/testimonials/testimonials.module').then(
        (m) => m.TestimonialsModule
      ),
  },
  {
    path: 'team',
    loadChildren: () =>
      import('./features/team/team.module').then((m) => m.TeamModule),
  },
  {
    path: 'contact',
    loadChildren: () =>
      import('./features/contact/contact.module').then((m) => m.ContactModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
