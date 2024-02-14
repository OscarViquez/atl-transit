import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
// eslint-disable-next-line @nx/enforce-module-boundaries
import {
   AppFacadeService,
   AppState
} from '@atl-transit/data-access';
import { SearchResults } from '../models/interfaces';
import { GeneralStationResponse } from '../../stations/models';

@Injectable({
   providedIn: 'root'
})
export class SearchService {
   constructor(private store: Store<AppState>, private facade: AppFacadeService) {}

   initializeData(): void {
      this.facade.dispatchSearchModal();
   }

   // * This method is used to search for stations on the modal
   processQuery(userQuery: string) {
      return this.facade.allGeneralStations$.pipe(
         switchMap((stations: GeneralStationResponse[]) => this.filterAndMapStations(stations, userQuery))
      );
   }

   private filterAndMapStations(stations: GeneralStationResponse[], userQuery: string) {
      const results = stations
         .filter((station) => this.isStationMatch(station, userQuery))
         .map((station) => this.mapStationToSearchResult(station));
      return of(results);
   }

   private isStationMatch(station: GeneralStationResponse, userQuery: string): boolean {
      const stationNameLowerCase = station.name.toLowerCase();
      return stationNameLowerCase.includes(userQuery);
   }

   private mapStationToSearchResult(station: GeneralStationResponse): SearchResults {
      return {
         label: this.formatStationName(station.name.toLowerCase()),
         action: '/' + station._station_key
      } as SearchResults;
   }

   private formatStationName(name: string): string {
      return name
         .replace('STATION', '')
         .trim()
         .split(' ')
         .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
         .join(' ');
   }
}
