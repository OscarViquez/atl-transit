/* eslint-disable @nx/enforce-module-boundaries */
import { TrainStaion, StationInterface, JsonStationInterface, AmenitiesStationInterface, ScheduleStationInterface } from "@atl-transit/stations";
import { User, MartaArrivalResponse } from "./index";
export interface AppStateInterface {
   user: UserStateInterface;
   station: StationInterface
}

export interface UserStateInterface {
   user: User;
   locationFound: boolean;
   trainStations: TrainStaion[];
   error?: string;
   loading: boolean;
}

export interface StationStateInterface {
   jsonStations: JsonStationInterface[];
   arrivalData: MartaArrivalResponse[];
   railArrivalData: StationInterface[];
   amenities: AmenitiesStationInterface[], 
   stationSchedule: ScheduleStationInterface[],
   loading: boolean;
   error?: string;
}
