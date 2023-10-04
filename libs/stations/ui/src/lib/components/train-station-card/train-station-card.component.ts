import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RailArrivalCardComponent } from '../rail-arrival-card/rail-arrival-card.component';
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
      this.content.button.mode = 'light';
   }
}
