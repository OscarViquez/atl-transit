import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrival } from '../../models';
import { BadgeComponent, HeaderComponent } from '@atl-transit/shared';
import { StationArrivalItemComponent } from '../station-arrival-item/station-arrival-item.component';

@Component({
   selector: 'rya-station-arrival-card',
   standalone: true,
   imports: [CommonModule, HeaderComponent, StationArrivalItemComponent, BadgeComponent],
   template: `
      <article class="card ">
         <shared-header class="arrival-card__header" [content]="content.header" variant="card" />
         <div class="arrival-card__info">
            <span> This station serves these lines </span>
            <shared-badge color="gold" radius="pill">G</shared-badge>
            <shared-badge> North </shared-badge>
            <shared-badge> South </shared-badge>
         </div>
         @for (arrivalItem of content.arrivals; track idx; let idx = $index) {
            <rya-station-arrival-item [content]="arrivalItem" />
         }
      </article>
   `,
   styleUrl: './station-arrival-card.component.scss'
})
export class StationArrivalCardComponent {
   @Input() content!: StationArrival;
}
