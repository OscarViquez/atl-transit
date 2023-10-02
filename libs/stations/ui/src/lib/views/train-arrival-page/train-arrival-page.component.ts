/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Facade } from 'stations-data';
import { OnInit } from '@angular/core';
//component import
import { TrainStaion } from '../../models';
import { TrainStationCardComponent } from '../../components/train-station-card/train-station-card.component';
import { CardComponent } from 'shared';

@Component({
   selector: 'lib-train-arrival-page',
   standalone: true,
   imports: [CommonModule, CardComponent, TrainStationCardComponent],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit {
   trainData!: TrainStaion[] 
   constructor(public facade: Facade) {}

   async ngOnInit(): Promise<void> {
      try {
         const result = await this.facade.initializePageRender();

         if (result == true) {
            this.trainData = this.facade.uiStations;
            console.log("also here")
         }
      } catch (error) {
         console.log(error);
      }
   }

   //console.log(this.facade.initializePageRender());
   // console.log(this.facade.arrivalData$.subscribe());
}
