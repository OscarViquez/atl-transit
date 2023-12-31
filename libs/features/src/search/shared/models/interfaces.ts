import { ButtonInputType } from "@atl-transit/shared";
import { SearchModalStates } from "./types";

export interface SearchResults {
   label: string;
   action: ButtonInputType;
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
