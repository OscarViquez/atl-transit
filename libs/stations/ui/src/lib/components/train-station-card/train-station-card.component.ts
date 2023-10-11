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
export class TrainStationCardComponent implements OnInit {
   @Input() content!: TrainStaion;

   ngOnInit(): void {
      this.setComponentState();
      this.content.button.mode = 'light';
   }

   // TODO: Have this method moved to the adapter
   public setComponentState(): void {
      if (this.content.railArrivals.length > 0) {
         this.content.state = {
            isLoading: true,
            systemMode: 'light',
            error: false
         };
      } else {
         this.content.state = {
            isLoading: false,
            systemMode: 'light',
            error: true
         };
      }
   }
}
