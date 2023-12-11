import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationCardInfoFlags, TrainStation } from '../../../shared';
import {
   BadgeComponent,
   ButtonComponent,
   CardFeedback,
   CardFeedbackComponent,
   CardHeaderComponent,
   ThemeButtonComponent
} from '@atl-transit/shared';
import { ArrivalInfoComponent } from '../arrival-info/arrival-info.component';

@Component({
   selector: 'lib-station-card',
   standalone: true,
   imports: [
      CommonModule,
      ButtonComponent,
      ThemeButtonComponent,
      BadgeComponent,
      CardHeaderComponent,
      CardFeedbackComponent,
      ArrivalInfoComponent
   ],
   templateUrl: './station-card.component.html',
   styleUrls: ['./station-card.component.scss']
})
export class StationCardComponent {
   /* Data for train arrivals */
   @Input() content!: TrainStation;
   /* Data for train arrivals */
   @Input() feedback!: CardFeedback;
   /* Set Max amount of train arrivals shown*/
   @Input() maxQuantiy!: number;
   /* decides which type of info should be shown */
   @Input() infoFlag!: 'arrival' | 'feedback';

   stationInfoFlags = StationCardInfoFlags;
}
