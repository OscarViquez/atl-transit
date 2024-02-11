import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrival } from '../../models';
import {
   BadgeDirective,
   ButtonDirective,
   CardDirective,
   HeaderComponent,
   LayoutDirective
} from '@atl-transit/shared';
import { StationArrivalItemComponent } from '../station-arrival-item/station-arrival-item.component';

@Component({
   selector: 'rya-station-arrival-card',
   standalone: true,
   imports: [
      CommonModule,
      HeaderComponent,
      StationArrivalItemComponent,
      ButtonDirective,
      CardDirective,
      LayoutDirective,
      BadgeDirective
   ],
   templateUrl: './station-arrival-card.component.html',
   styleUrl: './station-arrival-card.component.scss'
})
export class StationArrivalCardComponent {
   @Input() content!: StationArrival;
}
