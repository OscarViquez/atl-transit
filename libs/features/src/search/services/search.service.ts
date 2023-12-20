import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
   AppStateInterface,
   TrainUiAdapter,
   generalStationActions,
   stationGeneralSelector
} from '@atl-transit/global-state';
import { ButtonInputType } from '@atl-transit/shared';
import { SearchResults } from '../shared';

interface Station {
   id?: number;
   name: string;
}

@Injectable({
   providedIn: 'root'
})
export class SearchService {
   constructor(private store: Store<AppStateInterface>) {}

   init(): void {
      this.store.dispatch(generalStationActions.stationLocate());
   }

   processQuery(userQuery: string) {
      return this.store
         .select(stationGeneralSelector)
         .pipe(switchMap((stations) => this.filterAndMapStations(stations, userQuery)));
   }

   private filterAndMapStations(stations: Station[], userQuery: string) {
      const results = stations
         .filter((station) => this.isStationMatch(station, userQuery))
         .map((station) => this.mapStationToSearchResult(station));
      return of(results);
   }

   private isStationMatch(station: Station, userQuery: string): boolean {
      const stationNameLowerCase = station.name.toLowerCase();
      return stationNameLowerCase.includes(userQuery) || stationNameLowerCase == userQuery;
   }

   private mapStationToSearchResult(station: Station): SearchResults {
      const stationName = TrainUiAdapter.MapHeaderToUiView(station.name.toLowerCase());
      return {
         label: stationName,
         action: ButtonInputType.HYPERLINK
      } as SearchResults;
   }
}
