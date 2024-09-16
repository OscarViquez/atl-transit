import { Routes } from '@angular/router';
import { SearchPageComponent } from './components';

export const SEARCH_ROUTES: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    pathMatch: 'full',
  },
];
