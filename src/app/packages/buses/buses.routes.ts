import { Routes } from '@angular/router';
import { BusPageComponent } from './pages/bus-page/bus-page.component';

export const BUSES_ROUTES: Routes = [
  {
    path: '',
    component: BusPageComponent,
    pathMatch: 'full',
  },
];
