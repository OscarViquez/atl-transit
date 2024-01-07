/* eslint-disable @nx/enforce-module-boundaries */
import { TrainStation, StationDetails, GeneralStationResponse, AmenityDetails, StationSchedule } from "@atl-transit/stations";
import { UserLocationInfo, MartaArrivalResponse } from "./index";
export interface AppState {
   user: UserState;
   station: StationDetails
}

export interface UserState {
   user: UserLocationInfo;
   locationFound: boolean;
   trainStations: TrainStation[];
   error?: string;
   loading: boolean;
}

export interface StationState {
   jsonStations: GeneralStationResponse[];
   arrivalData: MartaArrivalResponse[];
   railArrivalData: StationDetails[];
   amenities: AmenityDetails[], 
   stationSchedule: StationSchedule[],
   loading: boolean;
   error?: string;
}
