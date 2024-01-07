/* eslint-disable @nx/enforce-module-boundaries */
import { TrainStation, StationInterface, GeneralStationResponse, AmenitiesStationInterface, ScheduleStationInterface } from "@atl-transit/stations";
import { UserLocationInfo, MartaArrivalResponse } from "./index";
export interface AppStateInterface {
   user: UserStateInterface;
   station: StationInterface
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
   railArrivalData: StationInterface[];
   amenities: AmenitiesStationInterface[], 
   stationSchedule: ScheduleStationInterface[],
   loading: boolean;
   error?: string;
}
