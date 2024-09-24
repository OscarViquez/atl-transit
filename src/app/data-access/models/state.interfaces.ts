import { Header, StationTrainArrivalCard, TrainArrivalDetails } from '@atl-transit/core';
import { GeoLocationCoord, TrainArrivalEndpointResponse } from './api.interfaces';
import {
  StationDetailsAmenity,
  StationDetailsBusRoute,
} from '../../packages/stations/interfaces/station-details-page.interfaces';

/**
 * Represents the geolocation state.
 */
export interface GeolocationState {
  /**
   * The geographical coordinates of the user's location.
   */
  location: GeoLocationCoord;

  /**
   * Boolean indicating if location access is allowed.
   */
  isLocationAllowed: boolean;

  /**
   * Optional error message if location access fails.
   */
  error?: string;
}

/**
 * Represents the user station train arrival data.
 */
export interface UserStationTrainArrivalData {
  /**
   * Array of the nearest stations to the user.
   */
  nearestStations: StationTrainArrivalCard[];

  /**
   * Array of stations saved by the user.
   */
  savedStations: StationTrainArrivalCard[];
}

/**
 * Shape of object that holds the initial state of the Train Feature.
 */
export interface TrainFeatureState {
  /**
   * All real-time train arrivals from the API.
   */
  allTrainArrivals: TrainArrivalEndpointResponse[];

  /**
   * Most nearby stations to the user.
   */
  nearestStations: StationTrainArrivalCard[];

  /**
   * All stations that were saved by the user.
   */
  savedStations: StationTrainArrivalCard[];

  /**
   * The geographical coordinates of the user's location.
   */
  userLocationCoordinates: GeoLocationCoord;
}

/**
 * Shape of object that holds the initial state of the Station Feature.
 */
export interface StationFeatureState {
  /**
   * Name of station and quick description about the station.
   */
  header: Header;
  /**
   * All upcoming train arrivals for the station.
   */
  arrivals: TrainArrivalDetails[];
  /**
   * All MARTA only bus routes that service the station.
   */
  busRoutes: StationDetailsBusRoute[];
  /**
   * All amenities available at the station.
   */
  amenities: StationDetailsAmenity[];
  /**
   * Boolean indicating if the station is saved or bookmarked by the user.
   */
  isSaved: boolean;
}
