import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { TrainArrivalPageComponent } from 'stations-ui';

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
