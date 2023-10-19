import { EnvironmentInjector, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { DataService } from './services/data.service';
import { locationReducer ,  stationReducer} from './state';


@NgModule({
   declarations: [],
   imports: [HttpClientModule, 
   StoreModule.forRoot({}),
   StoreDevtoolsModule.instrument({maxAge: 25}),
   StoreModule.forFeature('location', locationReducer),
   StoreModule.forFeature('stations', stationReducer)
],
   providers: [DataService],
   bootstrap: []
})
export class StateModule {}
