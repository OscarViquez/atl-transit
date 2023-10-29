import { SearchModalStates } from './types';

export interface SearchFilters {
   byNorthAndSouth: boolean;
   byStations: boolean;
   byBusRoutes: boolean;
   byStreetCar: boolean;
}

export interface SearchModal {
   isSearching: boolean;
   state: SearchModalStates;
}
