import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'trains',
    loadChildren: () => import('./packages/trains/trains.routes').then(r => r.TRAINS_ROUTES),
  },
  {
    path: 'stations',
    loadChildren: () => import('./packages/stations/stations.routes').then(r => r.STATION_ROUTES),
  },
  {
    path: 'bus',
    loadChildren: () => import('./packages/buses/buses.routes').then(r => r.BUSES_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'maps',
    loadChildren: () => import('./packages/maps/maps.routes').then(r => r.MAPS_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'cards',
    loadChildren: () => import('./packages/cards/cards.routes').then(r => r.CARDS_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadChildren: () => import('./packages/search/search.routes').then(r => r.SEARCH_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'dev',
    loadComponent: () => import('./packages/_dev/dev.component').then(c => c.DevComponent),
    pathMatch: 'full',
  },
];
