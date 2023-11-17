import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { StateModule } from 'global-state';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

// const providers = importProvidersFrom(
//   StateModule,
//   // ... other modules
// );

export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
      importProvidersFrom(
         StateModule
      ),
      {provide: LocationStrategy, useClass: HashLocationStrategy}
   ]
};
