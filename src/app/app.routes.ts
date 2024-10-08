import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/trains', pathMatch: 'full' }, // redirect to `first-component`
  {
    path: 'trains',
    loadChildren: () => import('./packages/trains/trains.routes').then(r => r.TRAINS_ROUTES),
  },
  {
    path: 'stations',
    loadChildren: () => import('./packages/stations/stations.routes').then(r => r.STATION_ROUTES),
  },
  {
    path: 'search',
    loadChildren: () => import('./packages/search/search.routes').then(r => r.SEARCH_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'bus',
    loadComponent: () => import('@atl-transit/errors').then(c => c.UnderConstructionPageComponent),
  },
  {
    path: 'alerts',
    loadComponent: () => import('@atl-transit/errors').then(c => c.UnderConstructionPageComponent),
  },
  {
    path: 'menu',
    loadComponent: () => import('@atl-transit/errors').then(c => c.UnderConstructionPageComponent),
  },
  {
    path: '**',
    loadComponent: () => import('@atl-transit/errors').then(c => c.PageNotFoundComponent),
  },
];
