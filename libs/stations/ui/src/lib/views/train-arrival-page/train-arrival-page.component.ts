/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facade } from 'stations-data';
import { OnInit } from '@angular/core';
//component import
import { TrainStaion } from '../../models';
import { TrainStationCardComponent } from '../../components/train-station-card/train-station-card.component';
import { CardComponent, Header, Tab } from 'shared';
import { HeroComponent } from 'shared';
import { TabComponent } from 'shared';

@Component({
   selector: 'lib-train-arrival-page',
   standalone: true,
   imports: [CommonModule, CardComponent, TrainStationCardComponent, HeroComponent,
   TabComponent],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit {
   trainData!: TrainStaion[] 
   tab: Tab[] = [
      {
        button: {
          text: 'Nearest Stations',
          mode: 'light',
          icon: '/assets/warning.png'
        },
        active: true
      },
      {
        button: {
          text: 'Saved Stations',
          mode: 'dark'
        },
        active: false
      }
    ];
    
   header: Header = {
      title: 'Train Arrivals',
      subtitle: 'View arrival times of rail lines in the area.'
   }
   constructor(public facade: Facade) {}

   async ngOnInit(): Promise<void> {
      try {
         const result = await this.facade.initializePageRender();
         if (result === true) {
            this.trainData = this.facade.uiStations;
         }
      } catch (error) {
         console.log(error);
      }
   }
  
   //console.log(this.facade.initializePageRender());
   // console.log(this.facade.arrivalData$.subscribe());
}
