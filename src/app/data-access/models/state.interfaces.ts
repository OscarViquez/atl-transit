import { StationTrainArrivalCard } from '@atl-transit/core';
import { GeoLocationCoord } from './api.interfaces';

export interface GeolocationState {
  location: GeoLocationCoord;
  isLocationAllowed: boolean;
  error?: string;
}

export interface UserStationTrainArrivalData {
  nearestStations: StationTrainArrivalCard[];
  savedStations: StationTrainArrivalCard[];
}
