import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainStationCardComponent, SavedStationsCardComponent } from 'stations-ui';
import {
   CardComponent,
   TabComponent,
   HeroComponent,
   LoadingSkeletonComponent
} from 'shared';
import { TrainArrivalPageComponent } from './views';
import { StoreModule } from '@ngrx/store';
import { userReducer } from 'global-state';


//* CAN NOT IMPORT STANDALONE COMPONENTS

@NgModule({
   imports: [
      CommonModule,
      CardComponent,
      TrainStationCardComponent,
      HeroComponent,
      TabComponent,
      SavedStationsCardComponent,
      LoadingSkeletonComponent,
      StoreModule.forRoot({userReducer})
   ],
   declarations: [TrainArrivalPageComponent],
})
export class StationsSmartModule {}
