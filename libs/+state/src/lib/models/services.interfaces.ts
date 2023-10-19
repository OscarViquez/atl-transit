import { TrainStaion } from "stations-ui";

export interface User {
 latitude: number;
 longitude: number;
 closestStation?: TrainStaion[]
}