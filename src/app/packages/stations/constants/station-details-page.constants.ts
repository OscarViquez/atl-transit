import { Amenities, BusRoutes, Header, StationTrainArrivalCard } from '@atl-transit/core';
import {
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

export const STATION_BUS_ROUTES: BusRoutes[] = [
  {
    name: 'Route 123',
    street: 'Marietta Blvd / Joseph E Lowery Blvd',
    serviceOperator: 'MARTA',
  },
  {
    name: 'Route 456',
    street: 'Marietta Blvd / Joseph E Lowery Blvd',
    serviceOperator: 'MARTA',
  },
  {
    name: 'Route 789',
    street: 'Marietta Blvd / Joseph E Lowery Blvd',
    serviceOperator: 'MARTA',
  },
  {
    name: 'Route 101',
    street: 'Marietta Blvd / Joseph E Lowery Blvd',
    serviceOperator: 'MARTA',
  },
];

export const STATION_AMENITIES: Amenities[] = [
  {
    name: 'Restrooms',
    description: 'Public restrooms are available at this station',
  },
  {
    name: 'Elevator',
    description: 'Elevator access is available at this station',
  },
  {
    name: 'Parking',
    description: 'Parking is available at this station',
    costType: 'paid',
  },
  {
    name: 'Bike Repair',
    description: 'Bike repair is available at this station',
    costType: 'paid',
  },
  {
    name: 'Lost & Found',
    description: 'Lost & found is available at this station',
  },
  {
    name: 'Police',
    description: 'Police are available at this station',
  },
  {
    name: 'ATM',
    description: 'ATM is available at this station',
    costType: 'paid',
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
    serviceLines: [
      {
        lineColor: 'gold',
        lineName: 'Gold Line',
      },
      {
        lineColor: 'red',
        lineName: 'Red Line',
      },
    ],
    arrivals: [
      {
        arrivalTime: '5 mins',
        destination: 'Doraville',
        cardinalDirection: 'North',
        lineColor: 'gold',
        link: {
          url: '/train-tracker/south-end',
        },
      },
      {
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
      url: '/stations/doraville#top-page',
    },
    isSaved: false,
    onSave: () => {
      console.log('Station saved!');
    },
  },
  {
    header: {
      title: 'Brookhaven Station',
    },
    serviceLines: [
      {
        lineColor: 'gold',
        lineName: 'Gold Line',
      },
      {
        lineColor: 'red',
        lineName: 'Red Line',
      },
    ],
    arrivals: [
      {
        arrivalTime: '5 mins',
        destination: 'Doraville',
        cardinalDirection: 'North',
        lineColor: 'gold',
        link: {
          url: '/train-tracker/south-end',
        },
      },
      {
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
    onSave: () => {
      console.log('Station saved!');
    },
  },
];

export const STATION_DETAILS_PAGE: StationDetailsPage = {
  header: STATION_DETAILS_PAGE_HEADER,
  arrivals: STATION_TRAIN_ARRIVAL_TIMES[0].arrivals,
  busRoutes: STATION_BUS_ROUTES,
  amenities: STATION_AMENITIES,
  isSaved: false,
};
