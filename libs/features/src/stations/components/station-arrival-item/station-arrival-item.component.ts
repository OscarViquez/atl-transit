import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationArrivalItem } from '../../models';
import { BadgeComponent } from '@atl-transit/shared';

@Component({
   selector: 'rya-station-arrival-item',
   standalone: true,
   imports: [CommonModule, BadgeComponent],
   template: `
      <article class="arrival-item">
         <div class="arrival-item__train">
            <h2 class="arrival-item__train-destination">
               {{ content.destination }}
            </h2>
            <div class="arrival-item__train-direction">
               <p class="arrival-item__train-direction-text">{{ content.direction }}bound</p>
               <shared-badge [color]="content.line"> {{ content.line | uppercase }} </shared-badge>
            </div>
         </div>
         <div class="arrival-item__times">
            <div class="arrival-item__times-scheduled">
               <h3 class="arrival-item__times-scheduled-title">Scheduled</h3>
               <p class="arrival-item__times-scheduled-time">{{ content.time }}</p>
            </div>
            <div class="arrival-item__times-estimated">
               <h3
                  class="arrival-item__times-estimated-title"
                  [class.delayed]="content.time.includes('delay')"
               >
                  Estimated
               </h3>
               <p class="arrival-item__times-estimated-time">{{ content.time }}</p>
            </div>
         </div>
      </article>
   `,
   styleUrl: './station-arrival-item.component.scss'
})
export class StationArrivalItemComponent {
   @Input() content!: StationArrivalItem;
   directionSuffix = 'bound';
}
