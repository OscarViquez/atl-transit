import { SearchModalStates } from './types';

export interface SearchResults {
   label: string;
   disabled?: boolean;
   description?: string;
   link?: string;
}

export interface SearchResultsProps {
   results: SearchResults[];
}

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
