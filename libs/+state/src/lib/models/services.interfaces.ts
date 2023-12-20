/* eslint-disable @nx/enforce-module-boundaries */
import { TrainStation } from "@atl-transit/stations";

export interface UserLocationInfo extends Coordinates {
 closestStation?: TrainStation[]
}


export interface Coordinates {
 latitude: number;
 longitude: number;
}