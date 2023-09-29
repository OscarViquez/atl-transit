import { Button } from "shared";
import { RailArrivalInterface } from "./railarrival.types";

export interface TrainStationInterface {
    name: string;
    description: string;
    railArrival: RailArrivalInterface[];
    button: Button;
    longitude: number;
    latitude: number;
    trainID: number;
}