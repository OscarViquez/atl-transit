import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RailArrival } from '../../models';
import { UiModes } from 'shared';
// import {getRailwayTimesAction} from '../../../../../data/hisworkin/actionRailway'

@Component({
   selector: 'lib-rail-arrival-card',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './rail-arrival-card.component.html',
   styleUrls: ['./rail-arrival-card.component.scss']
})
export class RailArrivalCardComponent {
   @Input() railArrival!: RailArrival[];
   @Input() systemMode!: UiModes;

   
}
