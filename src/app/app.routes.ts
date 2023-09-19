import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

export const appRoutes: Route[] = [
    {
      path: 'welcome',
      component: NxWelcomeComponent,
      pathMatch: 'full',
    },
  ];
