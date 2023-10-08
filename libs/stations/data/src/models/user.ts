import { TrainStaion } from "stations-ui";

export interface User {
 latitude: number;
 longitutde: number;
 closestStation?: TrainStaion
}