import { Header, StationTrainArrivalCard } from '@atl-transit/core';

export interface TrainPage {
  header: Header;
  tabs: string[];
  nearestStations?: StationTrainArrivalCard[];
  savedStations?: StationTrainArrivalCard[];
}

export interface TrainPageMessaging {
  noSavedStations: Header; // Header for the "No Saved Stations" message
}
