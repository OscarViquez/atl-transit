import { EnvironmentInjector, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { DataService } from './services';
import { locationReducer ,  stationReducer, UserEffects, StationEffects} from './state';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
   declarations: [],
   imports: [HttpClientModule, 
   StoreModule.forRoot({}),
   StoreDevtoolsModule.instrument({maxAge: 25}),
   StoreModule.forFeature('user', locationReducer),
   StoreModule.forFeature('stations', stationReducer),
   EffectsModule.forFeature([UserEffects, StationEffects]),
   EffectsModule.forRoot([])
],
   providers: [DataService],
   bootstrap: []
})
export class StateModule {}
