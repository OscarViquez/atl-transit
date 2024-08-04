import { Routes } from '@angular/router';
import { StationDetailsPageComponent } from './pages/station-details-page/station-details-page.component';

export const STATION_ROUTES: Routes = [
  {
    path: ':name',
    component: StationDetailsPageComponent,
  },
];
