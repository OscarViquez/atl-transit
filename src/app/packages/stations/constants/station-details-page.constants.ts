import { Header, StationTrainArrivalCard } from '@atl-transit/core';
import {
  StationDetailsAmenity,
  StationDetailsBusRoute,
  StationDetailsPage,
  StationDetailsPageMessaging,
} from '../interfaces/station-details-page.interfaces';

export const STATION_DETAILS_PAGE_HEADER: Header = {
  title: 'Peachtree Center',
  description: `
  Peachtree Center is heart of Atlanta's downtown and the transfer point between 
  all rail lines. The Red, Gold, Blue, and Green Lines all converge at Five Points
  `,
};

export const STATION_BUS_ROUTES: StationDetailsBusRoute[] = [
  {
    routeNumber: 'Route 123',
    street: 'Marietta Blvd / Joseph E Lowery Blvd',
    serviceOperator: 'MARTA',
  },
  {
    routeNumber: 'Route 456',
    street: 'Marietta Blvd / Joseph E Lowery Blvd',
    serviceOperator: 'MARTA',
  },
  {
    routeNumber: 'Route 789',
    street: 'Marietta Blvd / Joseph E Lowery Blvd',
    serviceOperator: 'MARTA',
  },
  {
    routeNumber: 'Route 101',
    street: 'Marietta Blvd / Joseph E Lowery Blvd',
    serviceOperator: 'MARTA',
  },
];

export const STATION_AMENITIES: StationDetailsAmenity[] = [
  {
    name: 'Restrooms',
  },
  {
    name: 'Elevator',
  },
  {
    name: 'Parking',
  },
  {
    name: 'Bike Repair',
  },
  {
    name: 'Lost & Found',
  },
  {
    name: 'Police',
  },
  {
    name: 'ATM',
  },
];

export const STATION_DETAILS_ERROR_MESSAGING: StationDetailsPageMessaging = {
  noArrivals: {
    title: 'No upcoming arrivals',
    description:
      'There are currently no upcoming trains at this station. Please check back later for updates.',
  },
  noAmenities: {
    title: 'No amenities at this station',
    description:
      'This station does not have any amenities available at the moment. Please visit another station for amenities.',
  },
  noBusRoutes: {
    title: 'No bus routes at this station',
    description:
      'There are no bus routes servicing this station currently. Please check other nearby stations for available bus routes.',
  },
};

export const STATION_TRAIN_ARRIVAL_TIMES: StationTrainArrivalCard[] = [
  {
    header: {
      title: 'Lenox Station',
    },
    arrivals: [
      {
        id: 'Lenox',
        arrivalTime: '5 mins',
        destination: 'Doraville',
        cardinalDirection: 'North',
        lineColor: 'gold',
        link: {
          url: '/train-tracker/south-end',
        },
      },
      {
        id: 'Lenox',
        arrivalTime: '10 mins',
        destination: 'Airport',
        cardinalDirection: 'South',
        lineColor: 'red',
        link: {
          url: '/train-tracker/south-end',
        },
      },
    ],
    link: {
      url: '/stations/doraville#',
    },
    isSaved: false,
  },
  {
    header: {
      title: 'Brookhaven Station',
    },
    arrivals: [
      {
        id: 'Lenox',
        arrivalTime: '5 mins',
        destination: 'Doraville',
        cardinalDirection: 'North',
        lineColor: 'gold',
        link: {
          url: '/train-tracker/south-end',
        },
      },
      {
        id: 'Lenox',
        arrivalTime: '10 mins',
        destination: 'Airport',
        cardinalDirection: 'South',
        lineColor: 'red',
        link: {
          url: '/train-tracker/south-end',
        },
      },
    ],
    link: {
      url: '/stations/brookhaven',
    },
    isSaved: false,
  },
];

export const STATION_DETAILS_PAGE: StationDetailsPage = {
  header: STATION_DETAILS_PAGE_HEADER,
  arrivals: STATION_TRAIN_ARRIVAL_TIMES[0].arrivals,
  busRoutes: STATION_BUS_ROUTES,
  amenities: STATION_AMENITIES,
  isSaved: false,
};
