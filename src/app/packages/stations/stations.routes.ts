import { Routes } from '@angular/router';
import { StationDetailsPageComponent } from './components/station-details-page/station-details-page.component';
import { StationDetailsResolver } from './components/station-details-page/station-details-page.resolver';

export const STATION_ROUTES: Routes = [
  {
    path: ':stationName',
    component: StationDetailsPageComponent,
    data: { refreshComponent: true },
    resolve: {
      stationDetails: StationDetailsResolver,
    },
  },
];
