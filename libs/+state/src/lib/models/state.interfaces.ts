/* eslint-disable @nx/enforce-module-boundaries */
import { TrainStation, StationDetails, GeneralStationResponse, AmenityDetails, ScheduleStationInterface } from "@atl-transit/stations";
import { UserLocationInfo, MartaArrivalResponse } from "./index";
export interface AppStateInterface {
   user: UserStateInterface;
   station: StationDetails
}

export interface UserStateInterface {
   user: UserLocationInfo;
   locationFound: boolean;
   trainStations: TrainStation[];
   error?: string;
   loading: boolean;
}

export interface StationStateInterface {
   jsonStations: GeneralStationResponse[];
   arrivalData: MartaArrivalResponse[];
   railArrivalData: StationDetails[];
   amenities: AmenityDetails[], 
   stationSchedule: ScheduleStationInterface[],
   loading: boolean;
   error?: string;
}
