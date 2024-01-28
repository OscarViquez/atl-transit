import { Header } from '@atl-transit/shared';
import {
   StationArrival,
   StationArrivalSlot,
   StationMap,
   StationResources,
   TrainPage
} from '../models/interfaces';

/**
 *
 *
 *
 * * Mocks for the Train Page
 * * ==================================================================
 * * Best Practices for Mocks:
 * 1. Variables should be named in all caps and end with _MOCKS.
 * 2. All Mocks should be exported at the bottom of the file in the TRAIN_PAGE_MOCKS object.
 * 3. If the content is static, it should be stored in mocks.ts.
 * @var TRAIN_PAGE_MOCKS .
 */


const TRAIN_PAGE_HEADER: Header = {
   title: 'Train Page',
   description: 'Real-time information on the scheduled arrival times of trains.'
};

const STATION_ARRIVAL_SLOT_MOCKS: StationArrivalSlot[] = [
   {
      time: 'Arriving',
      destination: 'Airport',
      direction: 'South',
      line: 'Gold',
   },
   {
      time: '5 min',
      destination: 'Airport',
      direction: 'South',
      line: 'Gold'
   },
   {
      time: '11 min',
      destination: 'Airport',
      direction: 'South',
      line: 'Gold'
   },
   {
      time: '33 min',
      destination: 'Airport',
      direction: 'South',
      line: 'Gold'
   }
];

const NEAREST_STATION_ARRIVAL_MOCKS: StationArrival[] = [
   {
      _id: 1,
      header: {
         title: 'Doraville',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      url: '/stations/1',
      label: 'Go see more information about this station'
   },
   {
      _id: 2,
      header: {
         title: 'Chamblee',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      url: '/stations/2',
      label: 'Go see more information about this station'
   }
];

const SAVED_STATION_ARRIVAL_MOCKS: StationArrival[] = [
   {
      _id: 1,
      header: {
         title: 'Doraville',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      url: '/stations/1',
      label: 'Go see more information about this station'
   },
   {
      _id: 2,
      header: {
         title: 'Chamblee',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      url: '/stations/2',
      label: 'Go see more information about this station'
   },
   {
      _id: 2,
      header: {
         title: 'Brookhaven',
         description: 'All Rail Lines Available'
      },
      arrivals: STATION_ARRIVAL_SLOT_MOCKS,
      url: '/stations/3',
      label: 'Go see more information about this station'
   },
];

const STATION_RESOURCE_MOCKS: StationResources = {
   header: {
      title: 'Explore Resources',
      description: 'Discover Maps, Parking, and Ticket Information'
   },
   content: [
      {
         title: 'Parking',
         description: 'View the station map',
         icon: 'map',
         url: 'https://www.itsmarta.com/service-updates.aspx'
      },
      {
         title: 'Breeze Card',
         description: 'View the station parking',
         icon: 'parking',
         url: 'https://www.itsmarta.com/service-updates.aspx'
      },
      {
         title: 'Rail Map',
         description: 'View the station amenities',
         icon: 'amenities',
         url: 'https://www.itsmarta.com/service-updates.aspx'
      },
      {
         title: 'Schedules',
         description: 'View the station bus routes',
         icon: 'bus',
         url: 'https://www.itsmarta.com/service-updates.aspx'
      }
   ]
};

const MAP_MOCKS: StationMap = {
   image: {
      category: 'station',
      name: 'map'
   },
   description: 'Map feature is currently unavailable. Please check back later.'
};

export const TRAIN_PAGE_MOCKS: TrainPage = {
   header: TRAIN_PAGE_HEADER,
   nearest: NEAREST_STATION_ARRIVAL_MOCKS,
   saved: SAVED_STATION_ARRIVAL_MOCKS,
   resource: STATION_RESOURCE_MOCKS,
   map: MAP_MOCKS
};
