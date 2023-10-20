/* eslint-disable @nx/enforce-module-boundaries */
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { TrainArrivalPage } from '../../models';
import { HeroMock, TabMock } from 'shared';


@Component({
   selector: 'lib-train-arrival-page',
   standalone: false,
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit {
   content: TrainArrivalPage = {
      tab: TabMock,
      header: HeroMock,
   };

   ngOnInit() {
      console.log('Train Arrival Page Component');
   }
}
