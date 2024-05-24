import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrivalList } from '../../shared';
import { StationArrivalCardFullComponent } from '../station-arrival-card-full/station-arrival-card-full.component';

@Component({
   selector: 'stations-arrival-list',
   standalone: true,
   imports: [CommonModule, StationArrivalCardFullComponent],
   template: `
      <div class="flex flex-col gap-8">
         @if (currentTabIndex === 0) {
            @for (nearestStations of content.nearest; track idx; let idx = $index) {
               <stations-arrival-card-full [content]="nearestStations" />
            }
         }
         @if (currentTabIndex === 1) {
            @for (savedStations of content.saved; track idx; let idx = $index) {
               <stations-arrival-card-full [content]="savedStations" />
            }
         }
      </div>
   `
})
export class StationArrivalListComponent {
   @Input() content!: StationArrivalList;
   @Input() currentTabIndex!: number;
}
