import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
import { StateModule } from '@atl-transit/global-state';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';

export const appConfig: ApplicationConfig = {
   providers: [
      provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
      importProvidersFrom(
         StateModule
      ),
      // EXPIREMENTAL: This is to remove the hash from the url, if not, then we revert back to HashLocationStrategy
      {provide: LocationStrategy, useClass: PathLocationStrategy}
   ]
};
