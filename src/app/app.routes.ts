import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/_dev/dev-page.component').then(c => c.DevPageComponent),
    pathMatch: 'full',
  },
  {
    path: 'trains',
    loadChildren: () => import('./features/trains/trains.routes').then(r => r.TRAINS_ROUTES),
  },
  {
    path: 'stations',
    loadChildren: () => import('./features/stations/stations.routes').then(r => r.STATION_ROUTES),
  },
  {
    path: 'bus',
    loadChildren: () => import('./features/buses/buses.routes').then(r => r.BUSES_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'maps',
    loadChildren: () => import('./features/maps/maps.routes').then(r => r.MAPS_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'cards',
    loadChildren: () => import('./features/cards/cards.routes').then(r => r.CARDS_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadChildren: () => import('./features/search/search.routes').then(r => r.SEARCH_ROUTES),
    pathMatch: 'full',
  },
];
