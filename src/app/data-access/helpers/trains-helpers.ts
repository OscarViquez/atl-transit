import { BadgeColor, StationTrainArrivalCard, TrainArrivalDetails } from '@atl-transit/core';
import { GeoLocation, TrainArrivalInfo } from '../models/api.interfaces';
import { UserStationTrainArrivalData } from '../models/state.interfaces';
import { calculateDistanceBetweenCoordinates } from './calculation-helpers';
import { STATIONS_INFO_CONSTANTS } from '../constants/station-geolocation.constants';

/**
 * We are filtering the train arrivals to only show the stations that are in either the nearestStations or savedStations array.
 * We figured that this is an efficient way to identify the  arrivals of stations that are close to the user or the user has saved,
 * rather than calling multiple API requests to get the arrivals of each station. (e.g what if user has saved 10 stations, we should avoid
 * making 10 API requests to get the arrivals of each station)
 */
export function filterArrivals(
  arrivals: TrainArrivalInfo[],
  nearStations: string[],
  savedStations: string[]
): UserStationTrainArrivalData {
  const captilizedSaveStations = savedStations.map(station => station.toUpperCase());

  // Filter all arrivals that are ONLY shown in the stations array list
  const filteredArrivals = arrivals.filter(arrival => nearStations.includes(arrival.STATION));
  const filterSavedArrivals = arrivals.filter(arrival =>
    captilizedSaveStations.includes(arrival.STATION)
  );

  const mapToTrainArrivalDetailsList: TrainArrivalDetails[] =
    transformToTrainArrivalDetails(filteredArrivals);

  const mapTosavedTrainArrivalDetailsList: TrainArrivalDetails[] =
    transformToTrainArrivalDetails(filterSavedArrivals);

  const stationTrainArrivalCardList = transformToStationTrainArrivalCard(
    nearStations,
    mapToTrainArrivalDetailsList,
    captilizedSaveStations
  );

  const savedStationTrainArrivalCardList = transformToStationTrainArrivalCard(
    captilizedSaveStations,
    mapTosavedTrainArrivalDetailsList,
    captilizedSaveStations
  );

  return {
    nearestStations: stationTrainArrivalCardList,
    savedStations: savedStationTrainArrivalCardList,
  };
}

/**
 * We compare the user's location to the latitude and longitude of each station to get the distance between the user and the station.
 * We then sort the distances in ascending order and return the first two stations in the list.
 */
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

/**
 * Only use this function if you want to transform the TrainArrivalInfo[] to TrainArrivalDetails[]
 * for the TrainArrivalDetails UI Component
 */
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

/**
 * Only use this function if you want to transform the TrainArrivalDetails[] to StationTrainArrivalCard[]
 * for the StationTrainArrivalCard UI Component. ( Idealy, this function will only be used on train page unless figma design changes )
 */
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

/**
 * Output the station name in the format the design requires,
 *  e.g "PEACHTREE CENTER" => "Peachtree Center" or "north springs" => "North Springs"
 */
export function formatStationName(station: string): string {
  return station
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function generateStationUrl(station: string): string {
  return `/stations/${station.toLowerCase().replace('station', '')}`;
}

export function isStationSaved(station: string, savedStations: string[]): boolean {
  return savedStations.includes(station.toUpperCase());
}
