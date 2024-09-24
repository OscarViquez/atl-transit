import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoMessageComponent, LoadingSkeletonComponent, ToastComponent } from '@atl-transit/core';
import { StationDetailsPageMessaging } from '../../interfaces/station-details-page.interfaces';
import { STATION_DETAILS_ERROR_MESSAGING } from '../../constants/station-details-page.constants';
import {
  StationAmenitiesComponent,
  StationBusRoutesComponent,
  StationUpcomingArrivalsComponent,
  StationDetailsHeaderComponent,
} from '../../ui';
import { FacadeService } from '@atl-transit/data-access';

@Component({
  selector: 'app-stations-details-page',
  standalone: true,
  imports: [
    CommonModule,
    LoadingSkeletonComponent,
    StationAmenitiesComponent,
    StationBusRoutesComponent,
    StationUpcomingArrivalsComponent,
    ToastComponent,
    InfoMessageComponent,
    StationDetailsHeaderComponent,
  ],
  template: `
    <div class="flex flex-col mx-auto pb-12">
      @defer {
        <img
          src="assets/images/atlanta-piedmont-park.jpg"
          alt="Station Details Hero Image"
          loading="lazy"
          class="w-full h-[309px] object-cover lg:rounded-lg bg-neutral-600 animate-overlay-enter" />
      } @loading (minimum 1200ms) {
        <div class="w-full h-[309px] bg-neutral-500 animate-pulse"></div>
      }

      @if (facade.stationFeatureState$ | async; as content) {
        <section class="flex flex-col gap-10 pt-10 px-6 lg:px-0">
          <app-station-details-header
            [content]="content.header"
            [isSaved]="content.isSaved"
            (saveEmitter)="onSaveStation($event)" />
          <div class="h-[1px] w-full bg-neutral-400"></div>
          <app-station-upcoming-arrivals [arrivals]="content.arrivals" />
          <app-station-bus-routes [busRoutes]="content.busRoutes" />
          <app-station-amenities [amenities]="content.amenities" />
        </section>
      } @else {
        <section class="flex flex-col gap-10 pt-10 px-6 lg:px-0">
          <core-loading-skeleton loadingItem="header" />
          <core-loading-skeleton loadingItem="button" />
          <core-loading-skeleton loadingItem="card" />
        </section>
      }
    </div>
  `,
})
/**
 * The data for the Station Details page is being dynamically loaded from the store,
 * via the resolver. Check the `station-details-page.resolver.ts` file to see how
 * the data is being fetched.
 */
export class StationDetailsPageComponent {
  facade = inject(FacadeService);
  messaging: StationDetailsPageMessaging = STATION_DETAILS_ERROR_MESSAGING;

  onSaveStation(station: { isSaved: boolean; name: string }): void {
    station.isSaved
      ? this.facade.addStationToSaved(station.name)
      : this.facade.removeStationFromSaved(station.name);
  }
}
