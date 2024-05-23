import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrivalItem } from '../../shared';
import { BadgeComponent } from '@atl-transit/shared';

@Component({
   selector: 'stations-arrival-item',
   standalone: true,
   imports: [CommonModule, BadgeComponent],
   templateUrl: './station-arrival-item.component.html'
})
export class StationArrivalItemComponent {
   @Input() content!: StationArrivalItem;
   directionSuffix = 'bound';
}
