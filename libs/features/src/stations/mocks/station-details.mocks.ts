import { Card, Header } from '@atl-transit/shared';
import {
   BusRoutesItem,
   StationAmenity,
   StationArrivalItem,
   StationBusRoute,
   StationDetailsArrival,
   StationDetailsPage,
   StationMap,
   StationParking
} from '../models';

/**
 *
 *
 *
 * * Mocks for the Train Page
 * * ==================================================================
 * * Best Practices for Mocks:
 * 1. Variables should be named in all caps and end with _MOCKS.
 * 2. All Mocks should be exported at the bottom of the file in the @var STATION_DETAILS_MOCKS object.
 *
 *
 */

const STATION_DETAILS_HEADER_MOCKS: Header = {
   title: 'Airport Station',
   description: `Airport Station is the final station on the south end of the Red and Gold lines. It is nestled in-between the north and south baggage claim areas on the west end of the domestic terminal.
    Just outside Baggage Claim you can...  Read More`
};

const STATION_DETAILS_SCHEDULE_INFO_MOCKS: Card = {
   title: 'Scheduled Arrivals',
   description:
      'View live updates on train arrivals or view the scheduled arrivals for all trains for either all or this specific station.',
   link: [
      {
         label: 'View Scheduled',
         url: '/stations/airport/schedule'
      }
   ]
};

const STATION_DETAILS_ARRIVALS_SLOTS_MOCKS: StationArrivalItem[] = [
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

const STATION_DETAILS_ARRIVALS_MOCKS: StationDetailsArrival = {
   header: {
      title: 'Upcoming Arrivals',
      badges: [
         {
            label: '4',
            color: 'info'
         }
      ]
   },
   actions: [
      {
         _id: 'filter',
         label: 'Filter',
         icon: '/assets/icons/navigation/icon.svg'
      }
   ],
   arrivals: STATION_DETAILS_ARRIVALS_SLOTS_MOCKS
};

const STATION_DETAILS_AMENITIES_MOCKS: StationAmenity = {
   header: {
      title: 'Amenities',
      description:
         'View information on the available services, conveniences, and facilities within the station premises'
   },
   content: [
      {
         title: 'The Ride Store',
         description: 'View the station map',
         icon: '/assets/icons/navigation/icon.svg',
         badges: [
            {
               label: 'Free',
               color: 'info'
            },
            {
               label: 'Paid',
               color: 'info'
            }
         ]
      },
      {
         title: 'The Ride Store',
         description: 'View the station map',
         icon: '/assets/icons/navigation/icon.svg',
         badges: [
            {
               label: 'Free',
               color: 'info'
            }
         ]
      },
      {
         title: 'The Ride Store',
         description: 'View the station map',
         icon: '/assets/icons/navigation/icon.svg',
         badges: [
            {
               label: 'Free',
               color: 'info'
            }
         ]
      },
      {
         title: 'The Ride Store',
         description: 'View the station map',
         icon: '/assets/icons/navigation/icon.svg',
         badges: [
            {
               label: 'Free',
               color: 'info'
            }
         ]
      }
   ]
};

const STATION_BUS_ITEM_MOCKS: BusRoutesItem[] = [
   {
      image: '/assets/icons/navigation/icon.svg',
      route: 'Route 101',
      description: 'Martin Luther King Jr Dr  / Auburn Ave',
      link: {
         label: 'View Route',
         url: 'https://github.com'
      }
   },
   {
      image: '/assets/icons/navigation/icon.svg',
      route: 'Route 102',
      description: 'Martin Luther King Jr Dr  / Auburn Ave',
      link: {
         label: 'View Route',
         url: 'https://github.com'
      }
   },
   {
      image: '/assets/icons/navigation/icon.svg',
      route: 'Route 103',
      description: 'Martin Luther King Jr Dr  / Auburn Ave',
      link: {
         label: 'View Route',
         url: 'https://github.com'
      }
   },
   {
      image: '/assets/icons/navigation/icon.svg',
      route: 'Route 104',
      description: 'Martin Luther King Jr Dr  / Auburn Ave',
      link: {
         label: 'View Route',
         url: 'https://github.com'
      }
   }
];

const STATION_DETAILS_BUS_MOCKS: StationBusRoute = {
   header: {
      title: 'Bus Routes',
      description:
         'View the bus routes that serve this station. Select a route to view the schedule.'
   },
   routes: STATION_BUS_ITEM_MOCKS
};

const STATION_DETAILS_MAP_MOCKS: StationMap = {
   image: '/assets/icons/navigation/icon.svg',
   description: 'View the station map'
};

const STATION_DETAILS_PARKING_MOCKS: StationParking = {
   header: {
      title: '/assets/icons/navigation/icon.svg',
      description: 'View the station parking: pricing, availability, and map'
   },
   content: {
      title: 'Information Is Coming Soon',
      icon: '/assets/icons/navigation/icon.svg'
   }
};

export const STATION_DETAILS_MOCKS: StationDetailsPage = {
   header: STATION_DETAILS_HEADER_MOCKS,
   scheduleInfo: STATION_DETAILS_SCHEDULE_INFO_MOCKS,
   arrivals: STATION_DETAILS_ARRIVALS_MOCKS,
   amenity: STATION_DETAILS_AMENITIES_MOCKS,
   bus: STATION_DETAILS_BUS_MOCKS,
   map: STATION_DETAILS_MAP_MOCKS,
   parking: STATION_DETAILS_PARKING_MOCKS
};
