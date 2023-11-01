import { RailArrival } from "../models";


export const RailArrivalMock: RailArrival[] = [
   {
      station: 'Random',
      direction: 'North',
      destination: 'Doraville',
      color: 'gold',
      description: 'Northbound',
      arrivalTime: 'Arriving'
   },
   {
      station: 'Random',
      direction: 'South',
      destination: 'Airport',
      color: 'red',
      description: 'Southbound',
      arrivalTime: '1 min'
   },
   {
      station: 'Random',
      direction: 'East',
      destination: 'Indian Creek',
      color: 'green',
      description: 'Eastbound',
      arrivalTime: '3 min'
   },
   {
      station: 'Random',
      direction: 'West',
      destination: 'Hamilton E Holmes',
      color: 'blue',
      description: 'Westbound',
      arrivalTime: '5 min'
   }
];
