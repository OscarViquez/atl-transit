import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { StateModule } from '@atl-transit/global-state';

// const providers = importProvidersFrom(
//   StateModule,
//   // ... other modules
// );

export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
      importProvidersFrom(
         StateModule
      )
   ]
};
