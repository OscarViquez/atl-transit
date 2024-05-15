import { Header } from '@atl-transit/shared';
import { StationArrival, StationArrivalItem, TrainPage } from '../models';

/**
 *
 *
 *
 * * Mocks for the Train Page
 * * ==================================================================
 * * Best Practices for Mocks:
 * 1. Variables should be named in all caps and end with _MOCKS.
 * 2. All Mocks should be exported at the bottom of the file in the @var TRAIN_PAGE_MOCKS object.
 *
 *
 */

const TRAIN_PAGE_HEADER: Header = {
   title: "Station's Train Arrivals",
   description: 'Real-time information on the scheduled arrival times of trains.'
};

const STATION_ARRIVAL_SLOT_MOCKS: StationArrivalItem[] = [
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

const STATION_ARRIVAL_NORTH_LINE_SLOT_MOCKS: StationArrivalItem[] = [
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

const TAB_MOCKS: string[] = ['Nearest', 'Saved'];

const NEAREST_STATION_ARRIVAL_MOCKS: StationArrival[] = [
   {
      _id: 1,
      header: {
         title: 'Doraville',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/1'
      }
   },
   {
      _id: 2,
      header: {
         title: 'Chamblee',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/1'
      }
   }
];

const SAVED_STATION_ARRIVAL_MOCKS: StationArrival[] = [
   {
      _id: 1,
      header: {
         title: 'Lindbergh',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_NORTH_LINE_SLOT_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/1'
      }
   },
   {
      _id: 2,
      header: {
         title: 'Brookhaven',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/1'
      }
   },
   {
      _id: 3,
      header: {
         title: 'Lenox',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      link: {
         label: 'See Station Details',
         url: '/stations/1'
      }
   }
];

export const TRAIN_PAGE_MOCKS: TrainPage = {
   header: TRAIN_PAGE_HEADER,
   tabs: TAB_MOCKS,
   nearest: NEAREST_STATION_ARRIVAL_MOCKS,
   saved: SAVED_STATION_ARRIVAL_MOCKS
};
