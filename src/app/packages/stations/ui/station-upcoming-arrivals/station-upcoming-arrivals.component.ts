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
          <span class=" text-4 font-medium"> Total </span>

          <span
            class="grid place-content-center w-6 h-8 text-4 font-semibold bg-neutral-400 rounded-md">
            {{ arrivals.length }}
          </span>
        </div>
      </div>

      <div class="card gap-4 border-none shadow-card bg-white animate-fade-up">
        @for (arrival of arrivals; track idx; let idx = $index) {
          @if (showAllArrivals || idx < maxArrivalsShown) {
            <div class="cursor-default">
              <app-train-arrival-details class="flex-1" [content]="arrival" />
            </div>
          }
        } @empty {
          <core-info-message class="pb-12" [content]="messaging.noArrivals" />
        }

        @if (arrivals.length > maxArrivalsShown) {
          <div>
            <button
              class="mt-4 px-6 py-3 w-full lg:w-fit font-medium text-4 text-center bg-neutral-200 rounded-lg transition-all ease-linear duration-100 hover:bg-neutral-500 active:scale-[.97]"
              (click)="expandArrivalsList()">
              @if (showAllArrivals) {
                Hide Arrivals
              } @else {
                Show All {{ arrivals.length }} Arrivals
              }
            </button>
          </div>
        }
      </div>
    </section>
  `,
})
export class StationUpcomingArrivalsComponent {
  @Input() arrivals: TrainArrivalDetails[] = [];

  messaging = STATION_DETAILS_ERROR_MESSAGING;
  showAllArrivals: boolean = false;
  maxArrivalsShown: number = 5;

  expandArrivalsList(): void {
    this.showAllArrivals = !this.showAllArrivals;
  }
}
