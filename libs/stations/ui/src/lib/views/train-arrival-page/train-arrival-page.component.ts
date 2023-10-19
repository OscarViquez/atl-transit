/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facade, ViewService } from 'stations-data';
import { OnInit } from '@angular/core';
//component import
import { TrainStaion } from '../../models';
import { TrainStationCardComponent } from '../../components/train-station-card/train-station-card.component';
import { CardComponent, Header, HeroMock, Tab, TabMock } from 'shared';
import { HeroComponent } from 'shared';
import { TabComponent } from 'shared';
import {LoadingSkeletonComponent} from 'shared'
import { SavedStationsCardComponent } from '../../components/saved-stations-card/saved-stations-card.component';
import { Store } from '@ngrx/store';
import { UserStateInterface } from 'libs/stations/data/src/models';
import { userLocationAction } from  'libs/+state/src/lib/state'
@Component({
   selector: 'lib-train-arrival-page',
   standalone: true,
   imports: [
      CommonModule,
      CardComponent,
      TrainStationCardComponent,
      HeroComponent,
      TabComponent,
      SavedStationsCardComponent,
      LoadingSkeletonComponent
   ],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit {
   tab: Tab[] = TabMock;
   header: Header = HeroMock;
   trainData!: TrainStaion[];

   constructor(private facade: Facade, public view: ViewService, 
      private state: Store) {}

   async ngOnInit(): Promise<void> {
      this.state.dispatch(userLocationAction.location());
      console.log('test')
      try {
         this.facade.userLocation().then((res) => {
            if (res === true) {
            this.view.Loading = false;
            this.trainData = this.facade.uiStations;
            }
             })
         
         
      } catch (error) {
         console.log(error);
      }
   }
}
