import { Card, Header } from '@atl-transit/shared';
import { StationArrivalItem, StationDetailsArrival, StationDetailsPage } from '../models';

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
            color: 'gray'
         }
      ]
   },
   arrivals: STATION_DETAILS_ARRIVALS_SLOTS_MOCKS
};

export const STATION_DETAILS_MOCKS: StationDetailsPage = {
   header: STATION_DETAILS_HEADER_MOCKS,
   scheduleInfo: STATION_DETAILS_SCHEDULE_INFO_MOCKS,
   arrivals: STATION_DETAILS_ARRIVALS_MOCKS
};
