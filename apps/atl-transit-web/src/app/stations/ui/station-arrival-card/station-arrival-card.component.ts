import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrivalCard } from '../../shared';
import { BadgeComponent, HeaderComponent } from '@atl-transit/shared';
import { StationArrivalItemComponent } from '../station-arrival-item/station-arrival-item.component';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'stations-arrival-card',
   standalone: true,
   imports: [
      CommonModule,
      HeaderComponent,
      StationArrivalItemComponent,
      BadgeComponent,
      RouterModule
   ],
   template: `
      <article class="card" [ngClass]="{ 'pt-0 ': !content.header }">
         <div class="header">
            <h2 class="header__title font-medium text-6">{{ content.header?.title }}</h2>
            <p class="header__subtitle">{{ content.header?.description }}</p>
         </div>
         <!-- <stations-rail-lines-info-box /> -->
         @for (arrivalItem of content.arrivals; track idx; let idx = $index) {
            <stations-arrival-item [content]="arrivalItem" />
         }
      </article>
   `
})
export class StationArrivalCardComponent {
   @Input() content!: StationArrivalCard;
}
