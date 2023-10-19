import { TrainStaion, StationInterface, RailArrival } from "stations-ui";
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
}

export interface StationStateInterface {
   jsonStations: StationInterface[];
   arrivalData: MartaArrivalResponse[];
   railArrivalData: RailArrival[];
   loading: boolean;
   error?: string;
}
