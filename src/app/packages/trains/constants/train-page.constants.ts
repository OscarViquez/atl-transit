import { Header, StationTrainArrivalCard, TrainArrivalDetails } from '@atl-transit/core';
import { TrainPageMessaging } from '../interfaces/train-page.interfaces';

export const TRAIN_PAGE_HEADER: Header = {
  title: 'Trains',
  description:
    'Real-time information on the arrival times of trains. Either based on the stations near your location or saved stations',
};

export const TRAIN_PAGE_TABS: string[] = ['Nearest', 'Saved'];

export const STATION_TRAIN_ARRIVAL_CARD: StationTrainArrivalCard[] = [
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

export const SAVED_STATION_TRAIN_ARRIVAL_CARD: StationTrainArrivalCard[] = [
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
      url: '/stations/doraville',
    },
    isSaved: true,
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
    isSaved: true,
    onSave: () => {
      console.log('Station saved!');
    },
  },
];

export const TRAIN_ARRIVAL_DETAILS: TrainArrivalDetails = {
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
};

export const TRAIN_PAGE_CONTENT = {
  header: TRAIN_PAGE_HEADER,
  tabs: TRAIN_PAGE_TABS,
  nearestStations: STATION_TRAIN_ARRIVAL_CARD,
  savedStations: SAVED_STATION_TRAIN_ARRIVAL_CARD,
};
