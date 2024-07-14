/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   BadgeComponent,
   HeaderComponent,
   LoadingSkeletonComponent,
   ModalComponent
} from '@atl-transit/shared';
import {
   StationArrivalCardComponent,
   StationArrivalCardMinComponent,
   StationArrivalItemComponent
} from '../../ui';

import { STATION_DETAILS_MOCKS, StationDetailsPage } from '../../shared';

@Component({
   selector: 'app-stations-details-page',
   standalone: true,
   imports: [
      CommonModule,
      HeaderComponent,
      BadgeComponent,
      StationArrivalItemComponent,
      StationArrivalCardComponent,
      LoadingSkeletonComponent,
      StationArrivalCardMinComponent,
      ModalComponent
   ],
   templateUrl: './station-details-page.component.html'
})
export class StationDetailsPageComponent {
   content: StationDetailsPage = STATION_DETAILS_MOCKS;

   openStationScheduleModal = false;

   onModalChange(open: boolean) {
      this.openStationScheduleModal = open;
   }

   toggleStationSchedule() {
      this.openStationScheduleModal = !this.openStationScheduleModal;
   }
}
