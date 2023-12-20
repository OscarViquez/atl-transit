import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeComponent } from '@atl-transit/shared';
import { RailArrival } from '../../../shared';

@Component({
   selector: 'lib-arrival-info',
   standalone: true,
   imports: [CommonModule, BadgeComponent],
   templateUrl: './arrival-info.component.html',
   styleUrls: ['./arrival-info.component.scss']
})
export class ArrivalInfoComponent {
   @Input() content!: RailArrival;
   @Input() maxQuantiy!: number;
}
