import { Route } from '@angular/router';
import { TrainArrivalPageComponent } from '@atl-transit/stations';

export const appRoutes: Route[] = [
   {
      path: 'arrivals',
      component: TrainArrivalPageComponent,
      pathMatch: 'full'
   },
   {
      path: '**', // fallback router must in the last
      redirectTo: '', // this is optional depends of your needs
   }
];
