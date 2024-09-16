import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { STATION_DETAILS_ERROR_MESSAGING } from '../../constants/station-details-page.constants';
import {
  BadgeComponent,
  Header,
  InfoMessageComponent,
  LoadingSkeletonComponent,
  TrainArrivalDetails,
  TrainArrivalDetailsComponent,
} from '@atl-transit/core';

@Component({
  selector: 'app-station-upcoming-arrivals',
  standalone: true,
  imports: [
    CommonModule,
    TrainArrivalDetailsComponent,
    LoadingSkeletonComponent,
    InfoMessageComponent,
    BadgeComponent,
  ],
  template: `
    <section class="flex flex-col gap-8" id="upcoming-arrivals">
      <div class="flex items-center justify-between">
        <h2 class="text-7 font-bold">Upcoming Arrivals</h2>
        <div class="flex items-center gap-2">
          <core-badge> {{ arrivals.length }} </core-badge>
          <span> Total </span>
        </div>
      </div>

      <div class="card gap-4 border-none shadow-card bg-white cursor-pointer animate-fade-up">
        @defer (on timer(500ms)) {
          @for (arrival of arrivals; track idx; let idx = $index) {
            <a>
              <app-train-arrival-details class="flex-1" [content]="arrival" />
            </a>
          } @empty {
            <core-info-message class="pb-12" [content]="messaging.noArrivals" />
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

  messaging = STATION_DETAILS_ERROR_MESSAGING;
}
