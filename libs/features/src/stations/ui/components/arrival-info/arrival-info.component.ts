import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@atl-transit/shared';
import { TrainArrival } from '../../../shared';

@Component({
   selector: 'rya-arrival-info',
   standalone: true,
   imports: [CommonModule, BadgeComponent],
   templateUrl: './arrival-info.component.html',
   styleUrls: ['./arrival-info.component.scss']
})
export class ArrivalInfoComponent {
   @Input() content!: TrainArrival;
   @Input() maxQuantiy!: number;
}
