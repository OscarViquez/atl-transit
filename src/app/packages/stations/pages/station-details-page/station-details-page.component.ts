import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationErrorMessagingComponent } from '../../ui/station-error-messaging/station-error-messaging.component';

// TODO: Move this into /core/components directory. since it is a shared component across all domains of app
import { SearchWidgetComponent } from '../../../search';
import {
  LoadingSkeletonComponent,
  SaveButtonComponent,
  ToastComponent,
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
import {
  StationAmenitiesComponent,
  StationBusRoutesComponent,
  StationMapViewButtonComponent,
  StationMapViewModalComponent,
} from '../../ui';
import { StationUpcomingArrivalsComponent } from '../../ui/station-upcoming-arrivals/station-upcoming-arrivals.component';
import { StationDetailsHeaderComponent } from '../../containers/station-details-header/station-details-header.component';

@Component({
  selector: 'app-stations-details-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchWidgetComponent,
    LoadingSkeletonComponent,
    TrainArrivalDetailsComponent,
    SaveButtonComponent,
    StationErrorMessagingComponent,
    StationMapViewModalComponent,
    StationMapViewButtonComponent,
    StationAmenitiesComponent,
    StationBusRoutesComponent,
    StationUpcomingArrivalsComponent,
    ToastComponent,
    StationDetailsHeaderComponent,
  ],
  template: `
    <div class="flex gap-8 pb-[5rem]">
      <!-- Station Details Main Content -->
      <main class="flex flex-col gap-12 mx-auto xl:max-w-[432px]" id="top">
        <div class="hidden md:block">
          <app-search-widget [hasSmallOverlay]="true" />
        </div>

        <!-- Station Details Header -->
        <!-- <section class="flex flex-col gap-4">
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
        </section> -->
        <app-station-details-header [isSaved]="content.isSaved" />

        <hr class="border-t border-neutral-400" />

        <app-station-upcoming-arrivals [arrivals]="content.arrivals" />
        <app-station-bus-routes [busRoutes]="content.busRoutes" />
        <app-station-amenities [amenities]="content.amenities" />

        <app-station-map-view-modal
          [isModalOpen]="openMapViewModal"
          (modalChange)="openMapViewModal = false" />
      </main>

      <!-- Station Map Side View -->
      <div
        class="hidden xl:flex flex-col gap-12 mx-auto w-full relative rounded-lg animate-overlay-enter">
        <div
          class="sticky top-8 bottom-0 z-10 h-[94vh] w-full rounded-lg bg-neutral-300 overflow-hidden">
          <img
            src="/assets/images/atlanta-map-view.png"
            class="h-full object-cover"
            alt="image of a atlanta on a map " />
        </div>
      </div>
    </div>

    <!-- Map Available Button -->
    <app-station-map-view-button (click)="toggleMapViewModal()" />
  `,
})
export class StationDetailsPageComponent {
  content: StationDetailsPage = STATION_DETAILS_PAGE;

  messaging: StationDetailsPageMessaging = STATION_DETAILS_ERROR_MESSAGING;

  openMapViewModal = false;

  toggleMapViewModal() {
    this.openMapViewModal = !this.openMapViewModal;
  }
}
