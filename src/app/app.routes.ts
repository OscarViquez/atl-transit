import { Route } from '@angular/router';
import { StationDetailsPageComponent, TrainPageComponent } from '@atl-transit/stations';


export const appRoutes: Route[] = [
   {
      path: 'trains',
      component: TrainPageComponent,
      pathMatch: 'full'
   },
   {
      path: ':id',
      component: StationDetailsPageComponent,
      pathMatch: 'full'
   },
   {
      path: '**', // fallback router must in the last
      redirectTo: '', // this is optional depends of your needs
   }
];
