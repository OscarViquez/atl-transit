import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrivalCard } from '../../shared';
import { BadgeComponent, HeaderComponent, LoadingSkeletonComponent } from '@atl-transit/shared';
import { StationArrivalItemComponent } from '../station-arrival-item/station-arrival-item.component';
import { RouterModule } from '@angular/router';
import { StationRailLinesInfoBoxComponent } from '../station-rail-lines-info-box/station-rail-lines-info-box.component';

@Component({
   selector: 'stations-arrival-card-min',
   standalone: true,
   imports: [
      CommonModule,
      HeaderComponent,
      StationArrivalItemComponent,
      StationRailLinesInfoBoxComponent,
      LoadingSkeletonComponent,
      BadgeComponent,
      RouterModule
   ],
   template: `
      <article class="card">
         <stations-rail-lines-info-box [content]="content.infoBox" />
         @for (arrivalItem of content.arrivals; track idx; let idx = $index) {
            <stations-arrival-item [content]="arrivalItem" />
         }
      </article>
   `
})
export class StationArrivalCardMinComponent {
   @Input() content!: StationArrivalCard;
}
