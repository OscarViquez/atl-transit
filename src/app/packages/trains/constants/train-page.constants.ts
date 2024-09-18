import { Header, StationTrainArrivalCard, TrainArrivalDetails } from '@atl-transit/core';
import { TrainPageMessaging, TrainPageStaticContent } from '../interfaces/train-page.interfaces';

export const TRAIN_PAGE_HEADER: Header = {
  title: 'Trains',
  description:
    'Real-time information on the arrival times of trains. Either based on the stations near your location or saved stations',
};

export const STATION_TRAIN_ARRIVAL_CARD: StationTrainArrivalCard[] = [
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
      url: '/stations/doraville',
    },
    isSaved: false,
  },
  {
    header: {
      title: 'Brookhaven Station',
    },
    arrivals: [
      {
        id: 'Brookhaven',
        arrivalTime: '5 mins',
        destination: 'Doraville',
        cardinalDirection: 'North',
        lineColor: 'gold',
        link: {
          url: '/train-tracker/south-end',
        },
      },
      {
        id: 'Brookhaven',
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

export const SAVED_STATION_TRAIN_ARRIVAL_CARD: StationTrainArrivalCard[] = [
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
      url: '/stations/doraville',
    },
    isSaved: true,
  },
  {
    header: {
      title: 'Brookhaven Station',
    },
    arrivals: [
      {
        id: 'Brookhaven',
        arrivalTime: '5 mins',
        destination: 'Doraville',
        cardinalDirection: 'North',
        lineColor: 'gold',
        link: {
          url: '/train-tracker/south-end',
        },
      },
      {
        id: 'Brookhaven',
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
    isSaved: true,
  },
];

export const TRAIN_ARRIVAL_DETAILS: TrainArrivalDetails = {
  id: 'Brookhaven',
  arrivalTime: '10 mins',
  destination: 'Doraville',
  cardinalDirection: 'NORTH',
  lineColor: 'gold',
  link: {
    url: '/train-tracker/12345',
    label: 'Track Train',
    id: '12345',
  },
  arrivalTimestamp: '2021-08-25T12:00:00',
};

export const TRAIN_PAGE_MESSAGING: TrainPageMessaging = {
  noSavedStations: {
    title: 'No saved stations',
    description:
      'You have not saved any stations yet. Save your favorite stations to quickly access their upcoming train arrivals.',
  },
  errorFetchingStations: {
    title: 'Error loading stations',
    description:
      'An error occurred while loading the stations. Please try again later or refresh the page.',
  },
};

export const TRAIN_PAGE_LOCATION_STATUS = {
  on: 'Location On',
  off: 'Location Off',
  loading: 'Loading Location...',
  error: 'Error when fetching location',
};

export const TRAIN_PAGE_STATIC_CONTENT: TrainPageStaticContent = {
  header: TRAIN_PAGE_HEADER,
  tabs: ['Nearby', 'Saved'],
};
