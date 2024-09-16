import { Routes } from '@angular/router';
import { StationDetailsPageComponent } from './components/station-details-page/station-details-page.component';

export const STATION_ROUTES: Routes = [
  {
    path: ':stationName',
    component: StationDetailsPageComponent,
  },
];
