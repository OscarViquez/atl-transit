/* eslint-disable @nx/enforce-module-boundaries */
import { TrainStation } from "@atl-transit/stations";

export interface User {
 latitude: number;
 longitude: number;
 closestStation?: TrainStation[]
}