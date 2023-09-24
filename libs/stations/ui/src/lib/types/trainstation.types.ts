import { Button } from "../../../../../shared/src/models";
import { RailArrivalInterface } from "./railarrival.types";
import { RailArrival } from "stations-ui";

export interface TrainStationInterface {
    name: string;
    description: string;
    railArrival: RailArrivalInterface[];
    button: Button;
    longitude: number;
    latitude: number;
    trainID: number;
}