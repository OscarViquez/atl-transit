import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationErrorMessagingComponent } from '../../ui/station-error-messaging/station-error-messaging.component';

// TODO: Move this into /core/components directory. since it is a shared component across all domains of app
import { SearchWidgetComponent } from '@atl-transit/feats/search';
import {
  BadgeComponent,
  HeaderComponent,
  ListItemComponent,
  LoadingSkeletonComponent,
  SaveButtonComponent,
  SectionComponent,
  TrainArrivalDetailsComponent,
} from '@atl-transit/core';
import {
  StationDetailsPage,
  StationDetailsPageMessaging,
} from '../../interfaces/station-details-page.interfaces';
import {
  STATION_DETAILS_ERROR_MESSAGING,
  STATION_DETAILS_PAGE,
} from '../../constants/station-details-page.constants';

@Component({
  selector: 'app-stations-details-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchWidgetComponent,
    HeaderComponent,
    LoadingSkeletonComponent,
    TrainArrivalDetailsComponent,
    SaveButtonComponent,
    BadgeComponent,
    StationErrorMessagingComponent,
    ListItemComponent,
    SectionComponent,
  ],
  template: `
    <div class="flex gap-8">
      <!-- Station Details Main Content -->
      <main class="flex flex-col gap-12 mx-auto xl:max-w-[432px]" id="top-page">
        <div class="hidden md:block">
          <app-search-widget [hasSmallOverlay]="true" />
        </div>

        <section class="flex flex-col gap-4">
          <div class="header header--page gap-6">
            <div class="flex relative pr-12">
              <h2 class="header__title tracking-normal">{{ content.header.title }}</h2>
              <app-save-button
                class="absolute right-0"
                [isSaved]="content.isSaved"
                (click)="toggleSaved()" />
            </div>
            <p class="header__subtitle">{{ content.header.description }}</p>
          </div>
        </section>

        <hr class="border-t border-neutral-400" />

        <section class="flex flex-col gap-8" id="upcoming-arrivals">
          <h2 class="text-7 font-bold">Upcoming Arrivals</h2>
          <div class="card border border-neutral-400">
            @defer (on timer(500ms)) {
              @for (arrival of content.arrivals; track idx; let idx = $index) {
                <app-train-arrival-details [content]="arrival" />
              } @empty {
                <app-station-error-messaging [content]="messaging.noArrivals" />
              }
            } @placeholder {
              <span class="animate-overlay-enter flex flex-col gap-4">
                <core-loading-skeleton loadingItem="header" />
              </span>
            }
          </div>
        </section>

        <section class="flex flex-col gap-8" id="bus-routes">
          <h2 class="text-7 font-bold">Bus Routes</h2>
          <div>
            @for (busRoute of content.busRoutes; track idx; let idx = $index) {
              <core-list-item
                [content]="{
                  name: busRoute.name,
                  badgeLabel: busRoute.serviceOperator,
                  description: busRoute.street,
                }" />
            } @empty {
              <app-station-error-messaging [content]="messaging.noBusRoutes" />
            }
          </div>
        </section>

        <section class="flex flex-col gap-8" id="amenities">
          <h2 class="text-7 font-bold">Amenities</h2>
          <div>
            @for (amenity of content.amenities; track idx; let idx = $index) {
              <core-list-item
                [content]="{
                  name: amenity.name,
                  badgeLabel: amenity.costType,
                  description: amenity.description,
                }" />
            } @empty {
              <app-station-error-messaging [content]="messaging.noAmenities" />
            }
          </div>
        </section>
      </main>

      <!-- Station Map Side View -->
      <main class="xl:flex flex-col gap-12 mx-auto w-full hidden relative rounded-lg">
        <div class="sticky top-8 bottom-0 z-10 h-[94vh] w-full rounded-lg bg-primary">
          Main content
        </div>
      </main>
    </div>

    <!-- Map Available Button -->
    <div
      class="fixed grid items-center inset-x-0 bottom-[84px] z-50 w-full h-[70px] px-2 lg:inset-x-auto lg:w-2/4 xl:hidden">
      <button
        class="flex flex-1 justify-between items-center px-6 h-full rounded-lg bg-white border border-neutral-200 animate-fade-up shadow-card transition-all ease-linear duration-100          focus-state-secondary">
        <div>
          <img class="w-12 h-12" src="/assets/images/apple-maps-icon.png" alt="maps icon" />
        </div>
        <div class="flex flex-col justify-between flex-1 text-left ml-3">
          <p class="text-5 font-medium">Map Available</p>
          <p class="text-4 font-normal text-neutral-800">View location of the station</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none">
            <path
              d="M19.7803 15.5303C19.4874 15.8232 19.0126 15.8232 18.7197 15.5303L12 8.81066L5.28033 15.5303C4.98744 15.8232 4.51256 15.8232 4.21967 15.5303C3.92678 15.2374 3.92678 14.7626 4.21967 14.4697L11.4697 7.21967C11.7626 6.92678 12.2374 6.92678 12.5303 7.21967L19.7803 14.4697C20.0732 14.7626 20.0732 15.2374 19.7803 15.5303Z"
              fill="#212121" />
          </svg>
        </div>
      </button>
    </div>
  `,
})
export class StationDetailsPageComponent {
  content: StationDetailsPage = STATION_DETAILS_PAGE;

  messaging: StationDetailsPageMessaging = STATION_DETAILS_ERROR_MESSAGING;

  openStationScheduleModal = false;

  onModalChange(open: boolean) {
    this.openStationScheduleModal = open;
  }

  toggleStationSchedule() {
    this.openStationScheduleModal = !this.openStationScheduleModal;
  }

  toggleSaved(): void {
    this.content.isSaved = !this.content.isSaved;
  }
}
