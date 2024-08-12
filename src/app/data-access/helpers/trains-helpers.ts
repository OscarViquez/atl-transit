import { BadgeColor, StationTrainArrivalCard, TrainArrivalDetails } from '@atl-transit/core';
import { GeoLocation, TrainArrivalInfo } from '../models/api.interfaces';
import { UserStationTrainArrivalData } from '../models/state.interfaces';
import { calculateDistanceBetweenCoordinates } from './calculation-helpers';
import { STATIONS_INFO_CONSTANTS } from '../constants/station-geolocation.constants';

export function filterArrivals(
  arrivals: TrainArrivalInfo[],
  stations: string[],
  savedStations: string[]
): UserStationTrainArrivalData {
  const captilizedSaveStations = savedStations.map(station => station.toUpperCase());

  // Filter all arrivals that are ONLY shown in the stations array list
  const filteredArrivals = arrivals.filter(arrival => stations.includes(arrival.STATION));
  const filterSavedArrivals = arrivals.filter(arrival =>
    captilizedSaveStations.includes(arrival.STATION)
  );

  const trainArrivalDetailsList: TrainArrivalDetails[] =
    transformToTrainArrivalDetails(filteredArrivals);

  const savedTrainArrivalDetailsList: TrainArrivalDetails[] =
    transformToTrainArrivalDetails(filterSavedArrivals);

  const stationTrainArrivalCardList = transformToStationTrainArrivalCard(
    stations,
    trainArrivalDetailsList,
    captilizedSaveStations
  );

  const savedStationTrainArrivalCardList = transformToStationTrainArrivalCard(
    captilizedSaveStations,
    savedTrainArrivalDetailsList,
    captilizedSaveStations
  );

  return {
    nearestStations: stationTrainArrivalCardList,
    savedStations: savedStationTrainArrivalCardList,
  };
}

export function getNearestStations(userLocation: GeoLocation): string[] {
  const distances = STATIONS_INFO_CONSTANTS.map(station => ({
    id: station.id,
    distance: calculateDistanceBetweenCoordinates(userLocation, {
      latitude: station.latitude,
      longitude: station.longitude,
    }),
  }));

  distances.sort((a, b) => a.distance - b.distance);
  return distances.slice(0, 2).map(station => station.id);
}

export function transformToTrainArrivalDetails(
  trainArrivals: TrainArrivalInfo[]
): TrainArrivalDetails[] {
  return trainArrivals.map(arrival => ({
    id: arrival.STATION,
    arrivalTime: arrival.WAITING_TIME,
    destination: arrival.DESTINATION,
    cardinalDirection: transformCardinalDirection(arrival.DIRECTION),
    lineColor: transformLineToBadgeColor(arrival.LINE),
    arrivalTimestamp: new Date(arrival.EVENT_TIME).toISOString(),
    link: {
      url: `/train-tracker/${arrival.STATION.toLowerCase().replace(/\s+/g, '-')}`,
    },
  }));
}

export function transformToStationTrainArrivalCard(
  stations: string[],
  trainArrivalDetails: TrainArrivalDetails[],
  savedStations: string[]
): StationTrainArrivalCard[] {
  return stations.map(station => {
    const formattedStationName = formatStationName(station);
    const stationUrl = generateStationUrl(station);
    return {
      header: {
        title: formattedStationName,
      },
      arrivals: trainArrivalDetails.filter(arrival => arrival.id === station),
      link: {
        url: stationUrl,
      },
      isSaved: isStationSaved(station, savedStations),
    };
  });
}

export function transformCardinalDirection(direction: string) {
  switch (direction) {
    case 'N':
      return 'North';
    case 'S':
      return 'South';
    case 'E':
      return 'East';
    case 'W':
      return 'West';
    default:
      return 'N/A';
  }
}

export function transformLineToBadgeColor(line: string): BadgeColor {
  switch (line) {
    case 'RED':
      return 'red';
    case 'BLUE':
      return 'blue';
    case 'GREEN':
      return 'green';
    case 'GOLD':
      return 'gold';
    default:
      return 'gray';
  }
}

export function generateStationUrl(station: string): string {
  return `/stations/${station.toLowerCase().replace('station', '')}`;
}

export function formatStationName(station: string): string {
  return station
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function isStationSaved(station: string, savedStations: string[]): boolean {
  return savedStations.includes(station.toUpperCase());
}
