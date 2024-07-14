import { Route } from '@angular/router';
import { MapComponent } from './maps/map.component';
import { TrainPageComponent } from './stations/index';
import { StationDetailsPageComponent } from './stations/index';
import { CardsPageComponent } from './cards/features/cards-page/cards-page.component';

export const appRoutes: Route[] = [
   {
      path: 'trains',
      component: TrainPageComponent,
      pathMatch: 'full'
   },
   {
      path: 'maps',
      component: MapComponent,
      pathMatch: 'full'
   },
   {
      path: 'cards',
      component: CardsPageComponent,
      pathMatch: 'full'
   },
   {
      // Test: Test route for Station Details
      path: ':id',
      component: StationDetailsPageComponent,
      pathMatch: 'full'
   },
   {
      // Test: Test route for Station Details
      path: 'stations/:name',
      component: StationDetailsPageComponent
   },
   {
      path: '**', // fallback router must in the last
      redirectTo: '' // this is optional depends of your needs
   }
];
