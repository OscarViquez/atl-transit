import { BadgeColor, StationTrainArrivalCard, TrainArrivalDetails } from '@atl-transit/core';
import {
  GeoLocationCoord,
  TrainArrivalEndpointResponse,
  TrainStatus,
} from '../models/api.interfaces';
import { UserStationTrainArrivalData } from '../models/state.interfaces';
import { calculateDistanceBetweenCoordinates } from './calculation-utils';
import { STATIONS_INFO_CONSTANTS } from '../constants/station.constants';

export function filterArrivals(
  arrivals: TrainArrivalEndpointResponse[],
  nearStations: string[],
  savedStations: string[]
): UserStationTrainArrivalData {
  const capitalizeStations = (stations: string[]) => stations.map(station => station.toUpperCase());

  const filterAndTransformArrivals = (stations: string[]) => {
    const filteredArrivals = arrivals.filter(arrival => stations.includes(arrival.STATION));
    return getStationTrainArrivalCard(stations, getTrainArrivalDetails(filteredArrivals), stations);
  };
  const capitalizedSavedStations = capitalizeStations(savedStations);

  return {
    nearestStations: filterAndTransformArrivals(nearStations),
    savedStations: filterAndTransformArrivals(capitalizedSavedStations),
  };
}

/**
 * Calculates the distance between the user and each station,
 * sorts the distances, and returns the two nearest stations.
 */
export function findNearbyStations(userLocation: GeoLocationCoord): string[] {
  const distances = STATIONS_INFO_CONSTANTS.map(station => ({
    id: station.id,
    distance: calculateDistanceBetweenCoordinates(userLocation, {
      latitude: station.latitude,
      longitude: station.longitude,
    }),
  }));

  distances.sort((a, b) => a.distance - b.distance);
  return distances.slice(0, 3).map(station => station.id);
}

export function getTrainArrivalDetails(
  trainArrivals: TrainArrivalEndpointResponse[]
): TrainArrivalDetails[] {
  return trainArrivals.map(arrival => ({
    id: arrival.STATION,
    arrivalTime: arrival.WAITING_TIME,
    destination: arrival.DESTINATION,
    cardinalDirection: getCardinalDirection(arrival.DIRECTION),
    lineColor: getRailLineColor(arrival.LINE),
    arrivalTimestamp: new Date(arrival.EVENT_TIME).toISOString(),
    link: {
      url: `/train-tracker/${arrival.STATION.toLowerCase().replace(/\s+/g, '-')}`,
    },
  }));
}

export function getStationTrainArrivalCard(
  stations: string[],
  trainArrivalDetails: TrainArrivalDetails[],
  savedStations: string[]
): StationTrainArrivalCard[] {
  return stations.map(station => {
    return {
      header: {
        title: formatStationName(station),
        description: `Last updated at ${new Date()
          .toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
            timeZoneName: 'short',
          })
          .replace(/^0+/, '')}`,
      },
      arrivals: sortTrainArrivalDetails(
        trainArrivalDetails.filter(arrival => arrival.id === station)
      ),
      link: {
        url: generateStationUrl(station),
      },
      isSaved: isStationSaved(station, savedStations),
    };
  });
}

export function sortTrainArrivalDetails(arrivals: TrainArrivalDetails[]): TrainArrivalDetails[] {
  return arrivals.sort((a, b) => {
    const timeA = parseWaitingTime(a.arrivalTime);
    const timeB = parseWaitingTime(b.arrivalTime);

    if (timeA === 'Arriving' || timeB === 'Delayed') return -1;
    if (timeB === 'Arriving' || timeA === 'Delayed') return 1;

    return timeA - timeB;
  });
}

export function formatStationName(station: string): string {
  // e.g "PEACHTREE CENTER" => "Peachtree Center" or "north springs" => "North Springs"
  return station
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export function generateStationUrl(station: string): string {
  return `/stations/${station
    .toLowerCase()
    .replace('station', '')
    .replace(/\s+/g, '-')
    .replace(/-+$/, '')}`;
}

export function isStationSaved(station: string, savedStations: string[]): boolean {
  return savedStations.includes(station.toUpperCase());
}

function getCardinalDirection(direction: string) {
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

function getRailLineColor(line: string): BadgeColor {
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

function parseWaitingTime(waitingTime: string): TrainStatus {
  if (waitingTime === 'Arriving') return 'Arriving';
  if (waitingTime === 'Delayed') return 'Delayed';
  return parseInt(waitingTime, 10);
}
