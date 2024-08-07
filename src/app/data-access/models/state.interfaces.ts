import { StationTrainArrivalCard } from '@atl-transit/core';
import { GeoLocation, TrainArrivalInfo } from './api.interfaces';

export interface GeolocationState {
  location: GeoLocation;
  error: string | null;
}

export interface UserStationTrainArrivalData {
  nearestStations: StationTrainArrivalCard[];
  savedStations: StationTrainArrivalCard[];
}
