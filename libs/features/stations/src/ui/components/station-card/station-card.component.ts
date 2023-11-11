import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericTrainErrorMocks, TrainStaion } from '../../../shared';
import { RailArrivalCardComponent } from '../rail-arrival-card/rail-arrival-card.component';
import { ButtonComponent, CardHeaderComponent } from 'shared';
import { StationErrorMessageComponent } from '../station-error-message/station-error-message.component';

@Component({
   selector: 'lib-station-card',
   standalone: true,
   imports: [
      CommonModule,
      RailArrivalCardComponent,
      ButtonComponent,
      CardHeaderComponent,
      StationErrorMessageComponent
   ],
   templateUrl: './station-card.component.html',
   styleUrls: ['./station-card.component.scss']
})
export class StationCardComponent {
   /* Data for train arrivals */
   @Input() content!: TrainStaion;
   /* Set Max amount of train arrivals shown*/
   @Input() maxQuantiy!: number;
   /* Error Message when there are no arrivals data */
   errorMessage = GenericTrainErrorMocks[1];
}
