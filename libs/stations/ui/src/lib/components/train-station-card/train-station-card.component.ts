import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RailArrivalCardComponent } from '../rail-arrival-card/rail-arrival-card.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ButtonComponent, CardHeaderComponent } from 'shared';
import { TrainStaion } from '../../models';

@Component({
   selector: 'lib-train-station-card',
   standalone: true,
   imports: [
      CommonModule,
      RailArrivalCardComponent,
      ButtonComponent,
      CardHeaderComponent
   ],
   templateUrl: './train-station-card.component.html',
   styleUrls: ['./train-station-card.component.scss']
})
export class TrainStationCardComponent {
   /* Data for train arrivals */
   @Input() content!: TrainStaion;
   /* Set Max amount of train arrivals shown*/
   @Input() maxQuantiy!: number;
}
