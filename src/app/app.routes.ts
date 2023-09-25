import { Route } from '@angular/router';
import { AppComponent } from './app.component';
import { TrainArrivalPageComponent } from 'stations-ui';

export const appRoutes: Route[] = [
   {
      path: 'welcome',
      component: AppComponent,
      pathMatch: 'full'
   },
   {
      path: 'arrivals',
      component: TrainArrivalPageComponent,
      pathMatch: 'full'
   }
];
