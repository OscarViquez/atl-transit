import { StationTrainArrivalCard } from '@atl-transit/core';
import { GeoLocation, TrainArrivalInfo } from './api.interfaces';

export interface GeolocationState {
  location: GeoLocation;
  error: string | null;
  userSelectionMade: boolean; // New property
}

export interface UserStationTrainArrivalData {
  nearestStations: StationTrainArrivalCard[];
  savedStations: StationTrainArrivalCard[];
}
