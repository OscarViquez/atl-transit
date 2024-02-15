/* eslint-disable @nx/enforce-module-boundaries */
import {
    TrainArrival,
    GeneralStationResponse,
    BusRoutes,
    StationDetails,
    AmenityData,
    StationInformation
 } from '@atl-transit/stations';
import { getStationAmenities, getTrainArrivalGroups } from './index';
 import { UiAdapter } from '../shared';
 
 
 export const getAllStationDetails = (
    allStations: GeneralStationResponse[],
    arrivals: TrainArrival[],
    amenities: AmenityData[]
 ): StationDetails[] => {
    return allStations.map((station) => {
       const routes: BusRoutes[] = [];
       const stationData = getStationInformation(
          parseFloat(station.latitude),
          parseFloat(station.latitude),
          station.contactnumber
       );
       const stationAmenities = getStationAmenities(station.amenities, amenities);
 
       const stationDetails = {
          stationKey: station._station_key,
          header: UiAdapter.TextToGenericHeader(station.name, station.description),
          supplementaryInformation: stationData,
          connectingBusRoutes: routes,
          amenities: stationAmenities,
          allArrivals: []
       };
 
       const stationToReturn = getTrainArrivalGroups(arrivals, stationDetails);
 
       return stationToReturn;
    });
 };
 
 
 export const getStationInformation = (
    lat: number,
    long: number,
    phone: string
 ): StationInformation => {
    return {
       latitude: lat,
       longitude: long,
       contactNumber: phone
    };
 };
 
 