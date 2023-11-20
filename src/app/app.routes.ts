import { Route } from '@angular/router';
import { StationPageComponent, TrainArrivalPageComponent } from '@atl-transit/stations';


export const appRoutes: Route[] = [
   {
      path: 'trains',
      component: TrainArrivalPageComponent,
      pathMatch: 'full'
   },
   {
      path: 'search',
      component: StationPageComponent,
      pathMatch: 'full'
   },
   {
      path: '**', // fallback router must in the last
      redirectTo: '', // this is optional depends of your needs
   }
];
