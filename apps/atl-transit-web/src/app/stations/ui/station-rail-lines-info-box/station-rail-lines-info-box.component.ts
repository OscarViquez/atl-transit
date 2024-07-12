import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationRailLineInfoBox } from '../../shared';
import { BadgeComponent, HeaderComponent } from '@atl-transit/shared';
import { StationArrivalItemComponent } from '../station-arrival-item/station-arrival-item.component';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'stations-rail-lines-info-box',
   standalone: true,
   imports: [
      CommonModule,
      HeaderComponent,
      StationArrivalItemComponent,
      BadgeComponent,
      RouterModule
   ],
   template: `
      <div class="flex items-center pb-4 gap-2 border-b border-neutral-400">
         <span class="text-1"> {{ content.text }} </span>
         @for (badge of content.badges; track idx; let idx = $index) {
            <shared-badge [color]="badge.color"> {{ badge.label }} </shared-badge>
         }
      </div>
   `
})
export class StationRailLinesInfoBoxComponent {
   @Input() content!: StationRailLineInfoBox;
}
