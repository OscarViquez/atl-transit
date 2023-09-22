import { RailArrival } from '../models';

export const RailArrivalMock: RailArrival[] = [
   {
      direction: 'North',
      destination: 'Doraville',
      color: 'gold',
      description: 'Northbound',
      arrivalTime: 'Arriving'
   },
   {
      direction: 'South',
      destination: 'Airport',
      color: 'red',
      description: 'Southbound',
      arrivalTime: '1 min'
   },
   {
      direction: 'East',
      destination: 'Indian Creek',
      color: 'green',
      description: 'Eastbound',
      arrivalTime: '3 min'
   },
   {
      direction: 'West',
      destination: 'Hamilton E Holmes',
      color: 'blue',
      description: 'Westbound',
      arrivalTime: '5 min'
   }
];
