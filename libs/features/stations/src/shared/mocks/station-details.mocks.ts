import { Badge, Card, Header } from '@atl-transit/shared';
import {
   StationDetailsAmenities,
   StationDetailsArrivals,
   StationDetailsBusRoutes,
   StationDetailsPage
} from '../models';

export const STATION_DETAILS_HEADER_MOCK: Header = {
   title: 'Five Points Station',
   description: `30 Alabama St SW, Atlanta, GA 30303`
};

export const STATION_DETAILS_BADGES_MOCK: Badge[] = [
   {
      label: 'Restrooms',
      color: 'black'
   },
   {
      label: 'Shuttles',
      color: 'black'
   },
   {
      label: 'Elevators',
      color: 'black'
   }
];

export const STATION_DETAILS_ABOUT_MOCK: string =
   "Five Points is heart of Atlanta's downtown and the transfer point between all rail lines. The Red, Gold, Blue, and Green Lines all converge at Five Points ...";

export const STATION_DETAILS_SCHEDULE_MOCK: Card = {
   title: 'Scheduled Arrivals',
   description: 'View the timetable for scheduled train arrivals at the station.',
   link: [
      {
         label: 'View Scheduled',
         url: '/stations/airport/schedule'
      }
   ]
};

const STATION_DETAILS_ARRIVALS_SECTION_MOCK: StationDetailsArrivals = {
   header: {
      title: 'Real-Time Train Arrivals'
   },
   data: {
      arrivals: [
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
      ]
   }
};

export const STATION_DETAILS_BUS_ROUTES_MOCK: StationDetailsBusRoutes = {
   header: {
      title: 'Bus Routes'
   },
   data: [
      {
         routeNumber: '103',
         routeName: 'Peeler Rd',
         link: {
            label: 'View Route 2',
            url: '/stations/airport/bus-route-2'
         }
      },
      {
         routeNumber: '104',
         routeName: 'Peachtree Industrial Blvd',
         link: {
            label: 'View Route 2',
            url: '/stations/airport/bus-route-2'
         }
      },
      {
         routeNumber: '110',
         routeName: 'Marietta Blvd/Joseph E Lowery Blvd',
         link: {
            label: 'View Route 1',
            url: '/stations/airport/bus-route-1'
         }
      },
      {
         routeNumber: '120',
         routeName: 'Peachtree St/Fulton Industrial Blvd',
         link: {
            label: 'View Route 2',
            url: '/stations/airport/bus-route-2'
         }
      }
   ]
};

export const STATION_DETAILS_AMENITIES_MOCK: StationDetailsAmenities = {
   header: {
      title: 'Amenities'
   },
   data: [
      {
         title: 'Ride Stores'
      },
      {
         title: 'Public restrooms'
      },
      {
         title: 'Elevator access'
      },
      {
         title: 'Parking'
      },
      {
         title: 'Bike racks'
      },
      {
         title: 'Shuttle services'
      }
   ]
};

export const STATION_DETAILS_MOCKS: StationDetailsPage = {
   header: STATION_DETAILS_HEADER_MOCK,
   badges: STATION_DETAILS_BADGES_MOCK,
   about: STATION_DETAILS_ABOUT_MOCK,
   arrivals: STATION_DETAILS_ARRIVALS_SECTION_MOCK,
   schedule: STATION_DETAILS_SCHEDULE_MOCK,
   routes: STATION_DETAILS_BUS_ROUTES_MOCK,
   amenities: STATION_DETAILS_AMENITIES_MOCK
};
// STATION_ARRIVAL_ITEMS_MOCKS;
