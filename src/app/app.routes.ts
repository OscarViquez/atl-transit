import { Route } from '@angular/router';
import { StationDetailsPageComponent, TrainPageComponent } from '@atl-transit/features/stations';
import { BusComponent } from './test/bus.component';
import { CardTestComponent } from './test/card.component';
import { MapComponent } from './test/map.component';

export const appRoutes: Route[] = [
   {
      path: 'trains',
      component: TrainPageComponent,
      pathMatch: 'full'
   },
   {
      path: 'buses',
      component: BusComponent,
      pathMatch: 'full'
   },
   {
      path: 'cards',
      component: CardTestComponent,
      pathMatch: 'full'
   },
   {
      path: 'maps',
      component: MapComponent,
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
