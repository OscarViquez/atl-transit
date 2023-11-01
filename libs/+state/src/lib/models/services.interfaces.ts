/* eslint-disable @nx/enforce-module-boundaries */
import { TrainStaion } from "@atl-transit/stations";

export interface User {
 latitude: number;
 longitude: number;
 closestStation?: TrainStaion[]
}