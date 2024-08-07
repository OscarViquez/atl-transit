import { BadgeColor, StationTrainArrivalCard, TrainArrivalDetails } from '@atl-transit/core';
import { TrainArrivalInfo } from '../models/api.interfaces';
import { UserStationTrainArrivalData } from '../models/state.interfaces';

export function filterArrivals(
  arrivals: TrainArrivalInfo[],
  stations: string[],
  savedStations: string[]
): UserStationTrainArrivalData {
  // Filter all arrivals that are ONLY shown in the stations array list
  const filteredArrivals = arrivals.filter(arrival => stations.includes(arrival.STATION));

  const trainArrivalDetailsList: TrainArrivalDetails[] =
    transformToTrainArrivalDetails(filteredArrivals);

  const stationTrainArrivalCardList = transformToStationTrainArrivalCard(
    stations,
    trainArrivalDetailsList,
    savedStations
  );

  const savedStationTrainArrivalCardList = stationTrainArrivalCardList.filter(card => card.isSaved);

  return {
    nearestStations: stationTrainArrivalCardList,
    savedStations: savedStationTrainArrivalCardList,
  };
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

export function formatStationName(station: string): string {
  return station.toUpperCase()[0] + station.slice(1).toLowerCase().replace('station', 'Station');
}

export function generateStationUrl(station: string): string {
  return `/stations/${station.toLowerCase().replace('station', '')}`;
}

function isStationSaved(station: string, savedStations: string[]): boolean {
  return savedStations.includes(formatStationName(station));
}
