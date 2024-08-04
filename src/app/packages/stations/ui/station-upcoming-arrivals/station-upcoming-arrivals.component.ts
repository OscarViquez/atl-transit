import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import {
  Header,
  LoadingSkeletonComponent,
  TrainArrivalDetails,
  TrainArrivalDetailsComponent,
} from '@atl-transit/core';
import { StationErrorMessagingComponent } from '../station-error-messaging/station-error-messaging.component';
import { STATION_DETAILS_ERROR_MESSAGING } from '../../constants/station-details-page.constants';

@Component({
  selector: 'app-station-upcoming-arrivals',
  standalone: true,
  imports: [
    CommonModule,
    TrainArrivalDetailsComponent,
    StationErrorMessagingComponent,
    LoadingSkeletonComponent,
  ],
  template: `
    <section class="flex flex-col gap-8" id="upcoming-arrivals">
      <h2 class="text-7 font-bold">Upcoming Arrivals</h2>
      <div class="card border border-neutral-400">
        @defer (on timer(500ms)) {
          @for (arrival of arrivals; track idx; let idx = $index) {
            <app-train-arrival-details [content]="arrival" />
          } @empty {
            <app-station-error-messaging [content]="messaging" />
          }
        } @placeholder {
          <span class="animate-overlay-enter flex flex-col gap-4">
            <core-loading-skeleton loadingItem="header" />
          </span>
        }
      </div>
    </section>
  `,
})
export class StationUpcomingArrivalsComponent {
  @Input() arrivals: TrainArrivalDetails[] = [];

  messaging: Header = STATION_DETAILS_ERROR_MESSAGING.noArrivals;
}
