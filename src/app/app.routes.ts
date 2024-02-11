import { Route } from '@angular/router';
import {
   PreviewPageComponent,
   StationDetailsPageComponent,
   TrainPageComponent
} from '@atl-transit/features-ui';

export const appRoutes: Route[] = [
   {
      path: 'overview',
      component: PreviewPageComponent,
      pathMatch: 'full'
   },
   {
      path: 'trains',
      component: TrainPageComponent,
      pathMatch: 'full'
   },
   {
      path: 'bus',
      component: PreviewPageComponent,
      pathMatch: 'full'
   },
   {
      path: 'breeze',
      component: PreviewPageComponent,
      pathMatch: 'full'
   },
   {
      path: ':id',
      component: StationDetailsPageComponent,
      pathMatch: 'full'
   },

   {
      path: '**', // fallback router must in the last
      redirectTo: 'overview' // this is optional depends of your needs
   }
];
