import { Header, StationTrainArrivalCard } from '@atl-transit/core';

export interface TrainPage {
  header: Header;
  tabs: string[];
  nearestStations?: StationTrainArrivalCard[];
  savedStations?: StationTrainArrivalCard[];
}

export interface TrainPageStaticContent {
  header: Header;
  tabs: string[];
}

export interface TrainPageMessaging {
  noSavedStations: Header; // Header for the "No Saved Stations" message
  errorFetchingStations: Header; // Header for the "Error Fetching Arrivals" message
}

interface TrainPageLocationStatus {
  on: string;
  off: string;
  loading: string;
  error: string;
}
