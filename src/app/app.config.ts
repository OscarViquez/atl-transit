import { ApplicationConfig, importProvidersFrom, isDevMode } from '@angular/core';
import { provideRouter, withEnabledBlockingInitialNavigation } from '@angular/router';
import { appRoutes } from './app.routes';
// TODO: Edit config for scoped packages and libraries
// eslint-disable-next-line @nx/enforce-module-boundaries
import { StateModule } from '@atl-transit/data-access';
import { PathLocationStrategy, LocationStrategy } from '@angular/common';
import { provideServiceWorker } from '@angular/service-worker';

export const appConfig: ApplicationConfig = {
   providers: [
    provideRouter(appRoutes, withEnabledBlockingInitialNavigation()),
    importProvidersFrom(StateModule),
    // EXPIREMENTAL: This is to remove the hash from the url, if not, then we revert back to HashLocationStrategy
    { provide: LocationStrategy, useClass: PathLocationStrategy },
    provideServiceWorker('ngsw-worker.js', {
        enabled: !isDevMode(),
        registrationStrategy: 'registerWhenStable:30000'
    })
]
};
