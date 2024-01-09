/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { AppFacadeService } from '@atl-transit/global-state';
import { combineLatest, map } from 'rxjs';
import { StationDetailsInit, StationDetailsPageContent } from '../../shared';

@Injectable({
   providedIn: 'root'
})
export class StationDetailsService {
   constructor(private facade: AppFacadeService) {}

   // initializeData(): StationDetailsInit {
   //    return {
   //       content: this.setStationDetailsContent(),
   //       data$: combineLatest([
   //          this.facade.selectedStationDetails$,
   //          this.facade.currentStation$,
   //          this.facade.allAmenitiesData$,
   //          this.facade.selectedStationSchedule$
   //       ]).pipe(map(([station, currentStation, amenities, schedule]) => ({ station, currentStation, amenities, schedule })))
   //    };
   // }

   setStationDetailsContent(): StationDetailsPageContent {
      return {
        label: 'Station Details'
      };
   }
}
