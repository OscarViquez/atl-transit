import { Header } from '@atl-transit/shared';
import {
   StationArrivalCard,
   StationArrivalItem,
   StationRailLineInfoBox,
   TrainPage
} from '../models';

export const TRAIN_PAGE_HEADER: Header = {
   title: "Station's Train Arrivals",
   description: 'Real-time information on the scheduled arrival times of trains.'
};

export const STATION_ARRIVAL_ITEMS_MOCKS: StationArrivalItem[] = [
   {
      time: 'Arriving',
      destination: 'Airport',
      direction: 'South',
      line: 'gold'
   },
   {
      time: '5 min',
      destination: 'Airport',
      direction: 'South',
      line: 'gold'
   },
   {
      time: '11 min',
      destination: 'Airport',
      direction: 'South',
      line: 'gold'
   },
   {
      time: '33 min',
      destination: 'Airport',
      direction: 'South',
      line: 'gold'
   }
];

export const STATION_ARRIVAL_NORTH_LINE_SLOT_MOCKS: StationArrivalItem[] = [
   {
      time: 'Arriving',
      destination: 'Airport',
      direction: 'South',
      line: 'gold'
   },
   {
      time: '5 min',
      destination: 'North Spring',
      direction: 'North',
      line: 'red'
   },
   {
      time: '11 min',
      destination: 'Airport',
      direction: 'South',
      line: 'gold'
   },
   {
      time: '33 min',
      destination: 'North Spring',
      direction: 'North',
      line: 'red'
   }
];

export const TRAIN_PAGE_RAIL_LINES_INFO_BOX_MOCK: StationRailLineInfoBox = {
   text: 'This station serves these lines',
   badges: [
      {
         label: 'North',
         color: 'gray'
      }
   ]
};

export const TRAIN_PAGE_NEAREST_STATION_ARRIVAL_MOCK: StationArrivalCard[] = [
   {
      id: 1,
      infoBox: TRAIN_PAGE_RAIL_LINES_INFO_BOX_MOCK,
      header: {
         title: 'Doraville',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_ITEMS_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/doraville'
      }
   },
   {
      id: 2,
      infoBox: TRAIN_PAGE_RAIL_LINES_INFO_BOX_MOCK,
      header: {
         title: 'Chamblee',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_ITEMS_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/chamblee'
      }
   }
];

export const TRAIN_PAGE_SAVED_STATION_ARRIVAL_MOCK: StationArrivalCard[] = [
   {
      id: 1,
      infoBox: TRAIN_PAGE_RAIL_LINES_INFO_BOX_MOCK,
      header: {
         title: 'Lindbergh',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_NORTH_LINE_SLOT_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/lindbergh'
      }
   },
   {
      id: 2,
      infoBox: TRAIN_PAGE_RAIL_LINES_INFO_BOX_MOCK,
      header: {
         title: 'Brookhaven',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_ITEMS_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/brookhaven'
      }
   },
   {
      id: 3,
      infoBox: TRAIN_PAGE_RAIL_LINES_INFO_BOX_MOCK,
      header: {
         title: 'Lenox',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_ITEMS_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/doraville'
      }
   }
];

export const TRAIN_PAGE_TAB_MOCK: string[] = ['Nearest', 'Saved'];

export const TRAIN_PAGE_MOCKS: TrainPage = {
   header: TRAIN_PAGE_HEADER,
   tabs: TRAIN_PAGE_TAB_MOCK,
   nearest: TRAIN_PAGE_NEAREST_STATION_ARRIVAL_MOCK,
   saved: TRAIN_PAGE_SAVED_STATION_ARRIVAL_MOCK
};
