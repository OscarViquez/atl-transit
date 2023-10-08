/* eslint-disable @nx/enforce-module-boundaries */
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facade, ViewService } from 'stations-data';
import { OnInit } from '@angular/core';
//component import
import { TrainStaion } from '../../models';
import { TrainStationCardComponent } from '../../components/train-station-card/train-station-card.component';
import { CardComponent, Header, HeroMock, Tab, TabMock } from 'shared';
import { HeroComponent } from 'shared';
import { TabComponent } from 'shared';

@Component({
   selector: 'lib-train-arrival-page',
   standalone: true,
   imports: [
      CommonModule,
      CardComponent,
      TrainStationCardComponent,
      HeroComponent,
      TabComponent
   ],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit {
   tab: Tab[] = TabMock;
   header: Header = HeroMock;
   trainData!: TrainStaion[];

   constructor(public facade: Facade, public view: ViewService) {}

   async ngOnInit(): Promise<void> {
      console.log('test')
      try {
         const result = await this.facade.initializePageRender();
         if (result === true) {
            this.trainData = this.facade.uiStations;
         }
      } catch (error) {
         console.log(error);
      }
   }
}
