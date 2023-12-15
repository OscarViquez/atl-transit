import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { DataService } from './services';
import { userReducer, stationReducer, UserEffects, StationEffects } from './state';
import { EffectsModule } from '@ngrx/effects';
import {routerReducer, StoreRouterConnectingModule} from '@ngrx/router-store'

@NgModule({
   declarations: [],
   imports: [
      HttpClientModule,
      StoreModule.forRoot({ router: routerReducer}),
      StoreDevtoolsModule.instrument({ maxAge: 25 , connectInZone: true}),
      StoreModule.forFeature('user', userReducer),
      StoreModule.forFeature('stations', stationReducer),
      EffectsModule.forRoot([]),
      EffectsModule.forFeature([UserEffects, StationEffects]),
      StoreRouterConnectingModule.forRoot()
   ],
   providers: [DataService],
   bootstrap: []
})
export class StateModule {}
