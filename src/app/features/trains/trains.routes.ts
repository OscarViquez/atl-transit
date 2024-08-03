import { Routes } from '@angular/router';
import { TrainPageComponent } from './pages/trains-page/train-page.component';

export const TRAINS_ROUTES: Routes = [
  {
    path: '',
    component: TrainPageComponent,
    pathMatch: 'full',
  },
];
