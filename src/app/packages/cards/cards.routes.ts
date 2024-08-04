import { Routes } from '@angular/router';
import { CardsPageComponent } from './pages/cards-page/cards-page.component';

export const CARDS_ROUTES: Routes = [
  {
    path: '',
    component: CardsPageComponent,
    pathMatch: 'full',
  },
];
