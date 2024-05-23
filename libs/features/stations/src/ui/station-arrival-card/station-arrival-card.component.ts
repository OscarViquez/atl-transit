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
         <div
            class="flex items-center pb-4 gap-2 border-b border-neutral01"
            [ngClass]="{ 'pt-4 border-t': content.header }"
         >
            <span class="text-1"> This station serves these lines </span>
            <shared-badge color="gold" radius="icon-pill">G</shared-badge>
            <shared-badge> North </shared-badge>
            <shared-badge> South </shared-badge>
         </div>
         @for (arrivalItem of content.arrivals; track idx; let idx = $index) {
            <stations-arrival-item [content]="arrivalItem" />
         }
         <!-- <a class="link text-2 font-medium" href="/station/doraville">See More Details ></a> -->
      </article>
   `
})
export class StationArrivalCardComponent {
   @Input() content!: StationArrivalCard;
}
