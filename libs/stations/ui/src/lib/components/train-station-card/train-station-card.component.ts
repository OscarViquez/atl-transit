import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RailArrivalCardComponent } from '../rail-arrival-card/rail-arrival-card.component';
import { ButtonComponent } from 'shared';
import { TrainStaion } from '../../models';

@Component({
   selector: 'lib-train-station-card',
   standalone: true,
   imports: [CommonModule, RailArrivalCardComponent, ButtonComponent],
   templateUrl: './train-station-card.component.html',
   styleUrls: ['./train-station-card.component.scss']
})
export class TrainStationCardComponent {
   @Input() content!: TrainStaion;
}
