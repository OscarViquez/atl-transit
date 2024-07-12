import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrivalCard } from '../../shared';
import { BadgeComponent, HeaderComponent } from '@atl-transit/shared';
import { StationArrivalItemComponent } from '../station-arrival-item/station-arrival-item.component';
import { RouterModule } from '@angular/router';
import { StationRailLinesInfoBoxComponent } from '../station-rail-lines-info-box/station-rail-lines-info-box.component';

@Component({
   selector: 'stations-arrival-card-full',
   standalone: true,
   imports: [
      CommonModule,
      HeaderComponent,
      StationArrivalItemComponent,
      StationRailLinesInfoBoxComponent,
      BadgeComponent,
      RouterModule
   ],
   template: `
      <article class="card">
         <a [routerLink]="content.link?.url" class="block">
            <div class="header pb-4 mb-4 border-b border-b-neutral-400">
               <h2 class="header__title font-medium text-6">{{ content.header?.title }}</h2>
               <p class="header__subtitle">{{ content.header?.description }}</p>
            </div>
            <stations-rail-lines-info-box [content]="content.infoBox" />
            @for (arrivalItem of content.arrivals; track idx; let idx = $index) {
               <stations-arrival-item [content]="arrivalItem" />
            }
         </a>
      </article>
   `
})
export class StationArrivalCardFullComponent {
   @Input() content!: StationArrivalCard;
}
