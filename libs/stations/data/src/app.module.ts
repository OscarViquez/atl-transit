import {  NgModule } from '@angular/core';
import {StoreModule} from '@ngrx/store'
import {StoreDevtoolsModule} from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule

import { reducers } from './+state/reducers/user.reducer'; 
import { RailArrivalTimesService } from './services/railroad.times.service';
import { RailPredictionService } from './services/railroad.predictions.service';
import { RailSignPostService } from './services/railroad.signpost.service';
@NgModule({
  declarations: [

    
  ],
  imports: [
    HttpClientModule,
    StoreModule.forRoot({}), 
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    StoreModule.forFeature('user', reducers)
  ],
  providers: [RailArrivalTimesService,
  RailPredictionService,
  RailSignPostService],
  bootstrap: []
})
export class AppModule { }
