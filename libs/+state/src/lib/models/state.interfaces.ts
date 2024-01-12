/* eslint-disable @nx/enforce-module-boundaries */
import { TrainStation, StationDetails, GeneralStationResponse, AmenityData, StationSchedule } from "@atl-transit/stations";
import { MartaArrivalResponse, Coordinates } from "./index";
export interface AppState {
   user: UserState;
   station: StationDetails
}

export interface UserState {
   user: Coordinates;
   locationFound: boolean;
   error?: string;
}

export interface StationState {
   allStations: GeneralStationResponse[];
   arrivalData: MartaArrivalResponse[];
   amenities: AmenityData[], 
   stationSchedule: StationSchedule[],
   loading: boolean;
   error?: string;
}
