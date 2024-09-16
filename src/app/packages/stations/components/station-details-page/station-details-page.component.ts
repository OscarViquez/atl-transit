import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSkeletonComponent, ToastComponent } from '@atl-transit/core';
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
  StationUpcomingArrivalsComponent,
  StationDetailsHeaderComponent,
} from '../../ui';
import { FacadeService } from '@atl-transit/data-access';
import { ActivatedRoute, Router } from '@angular/router';

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
    StationDetailsHeaderComponent,
  ],
  template: `
    <div class="flex flex-col mx-auto  pb-12">
      <!-- Station Details Main Content -->
      <div class="w-full h-[309px] bg-neutral-200 animate-overlay-enter"></div>

      @if (facade.stationDetails$ | async; as content) {
        <section class="flex flex-col gap-10 pt-10 px-6 lg:px-0">
          <app-station-details-header
            [content]="content.header"
            [isSaved]="content.isSaved"
            (saveEmitter)="onSaveStation($event)" />
          <div class="h-[1px] w-full bg-neutral-400"></div>
          <app-station-upcoming-arrivals [arrivals]="content.arrivals" />
          <app-station-bus-routes [busRoutes]="content.busRoutes" />
        </section>
      } @else {
        <section class="flex flex-col gap-10 pt-10 px-6 lg:px-0">
          <core-loading-skeleton loadingItem="header" />
          <core-loading-skeleton loadingItem="card" />
        </section>
      }
    </div>
  `,
})
export class StationDetailsPageComponent implements OnInit {
  content: StationDetailsPage = STATION_DETAILS_PAGE;
  messaging: StationDetailsPageMessaging = STATION_DETAILS_ERROR_MESSAGING;
  openMapViewModal = false;
  stationName = '';

  constructor(
    public facade: FacadeService,
    private route: ActivatedRoute
  ) {
    this.stationName = this.route.snapshot.paramMap.get('stationName') || 'five-points';
    // TODO: Add a fallback to an error page if the station name is not found
  }

  ngOnInit(): void {
    this.facade.fetchStationDetails(this.stationName);
  }

  toggleMapViewModal() {
    this.openMapViewModal = !this.openMapViewModal;
  }

  onSaveStation(station: { isSaved: boolean; name: string }): void {
    station.isSaved
      ? this.facade.addStationToSaved(station.name)
      : this.facade.removeStationFromSaved(station.name);
  }
}
