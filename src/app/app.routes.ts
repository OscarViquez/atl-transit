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
    path: 'search',
    loadChildren: () => import('./packages/search/search.routes').then(r => r.SEARCH_ROUTES),
    pathMatch: 'full',
  },
  {
    path: 'alerts',
    loadComponent: () =>
      import('./pages/under-construction-page/under-construction-page.component').then(
        c => c.UnderConstructionPageComponent
      ),
  },
  {
    path: 'menu',
    loadComponent: () =>
      import('./pages/under-construction-page/under-construction-page.component').then(
        c => c.UnderConstructionPageComponent
      ),
  },
];
