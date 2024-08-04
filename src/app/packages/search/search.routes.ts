import { Routes } from '@angular/router';
import { SearchPageComponent } from './pages';

export const SEARCH_ROUTES: Routes = [
  {
    path: '',
    component: SearchPageComponent,
    pathMatch: 'full',
  },
];
