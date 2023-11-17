import { Route } from '@angular/router';
import { StationDetailsPageComponent, TrainArrivalPageComponent } from '@atl-transit/stations';


export const appRoutes: Route[] = [
   {
      path: 'arrivals',
      component: TrainArrivalPageComponent,
      pathMatch: 'full'
   },
   {
      path: 'station/:id',
      component: StationDetailsPageComponent,
      pathMatch: 'full'
   },
   {
      path: '**', // fallback router must in the last
      redirectTo: '', // this is optional depends of your needs
   }
];
