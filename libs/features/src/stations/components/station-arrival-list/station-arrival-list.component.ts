import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrivalList } from '../../models';
import { StationArrivalCardComponent } from '../station-arrival-card/station-arrival-card.component';

@Component({
   selector: 'rya-station-arrival-list',
   standalone: true,
   imports: [CommonModule, StationArrivalCardComponent],
   templateUrl: './station-arrival-list.component.html',
   styleUrl: './station-arrival-list.component.scss'
})
export class StationArrivalListComponent {
   @Input() content!: StationArrivalList;
   @Input() currentTabIndex!: number;
}
