/* eslint-disable @nx/enforce-module-boundaries */
import {
   HeroComponent,
   TabComponent,
   LoadingSkeletonComponent,
   GenericHeader
} from '@atl-transit/shared';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
   amenitiesByIdSelector,
   AppStateInterface,
   generalStationByIdSelector,
   scheduleByIdSelector,
   TrainUiAdapter
} from '@atl-transit/global-state';
import { StationCardComponent } from '../../components';

@Component({
   selector: 'rya-station-details-page',
   standalone: true,
   imports: [
      CommonModule,
      HeroComponent,
      TabComponent,
      StationCardComponent,
      LoadingSkeletonComponent
   ],
   templateUrl: './station-details-page.component.html',
   styleUrls: ['./station-details-page.component.scss']
})
export class StationDetailsPageComponent implements OnInit {
   station$ = this.store.select(generalStationByIdSelector);
   staticContentHeader!: GenericHeader;
   amenities$ = this.store.select(amenitiesByIdSelector);
   schedule$ = this.store.select(scheduleByIdSelector);

   constructor(private store: Store<AppStateInterface>) {}

   ngOnInit(): void {
      this.subscribeToStation();
   }

   // NOTE: For Readability, had to move the subscibes and other method in to their own methods
   subscribeToStation(): void {
      this.station$.subscribe((station) => {
         this.updateStaticContentHeader(station);
      });
   }

   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   updateStaticContentHeader(station: any): void {
      const stationName = TrainUiAdapter.MapHeaderToUiView(station?.name || '');
      this.staticContentHeader = {
         title: stationName,
         subtitle: station?.description
      };
   }

   // NOTE: For Readability, had to put this in to a different method
   getTodayDate(): Date {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
      const day = String(today.getDate()).padStart(2, '0');
      const formattedDate = `${year}-${month}-${day}`;
      const dateString = 'T23:42:00.000Z';
      return new Date(formattedDate + dateString);
   }
}
