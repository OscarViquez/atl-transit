import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrivalItem } from '../../models';
import { BadgeDirective } from '@atl-transit/shared';

@Component({
   selector: 'rya-station-arrival-item',
   standalone: true,
   imports: [CommonModule, BadgeDirective],
   templateUrl: './station-arrival-item.component.html',
   styleUrl: './station-arrival-item.component.scss'
})
export class StationArrivalItemComponent {
   @Input() content!: StationArrivalItem[];
   directionSuffix = 'bound';
}
