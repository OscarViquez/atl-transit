import { Routes } from '@angular/router';
import { MapsPageComponent } from './pages/maps-page/maps-page.component';

export const MAPS_ROUTES: Routes = [
  {
    path: '',
    component: MapsPageComponent,
    pathMatch: 'full',
  },
];
