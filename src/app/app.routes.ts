import { Route } from '@angular/router';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
    {
      path: 'welcome',
      component: AppComponent,
      pathMatch: 'full',
    },
  ];
