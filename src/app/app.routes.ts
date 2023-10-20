import { Route } from '@angular/router';
import { TrainArrivalPageComponent } from '@stations-data';

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
