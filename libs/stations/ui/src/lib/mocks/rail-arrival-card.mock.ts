import { RailArrival } from "../models";


export const RailArrivalMock: RailArrival[] = [
   {
      station: 'Random',
      direction: 'North',
      destination: 'Doraville',
      color: 'gold',
      description: 'Northbound',
      secondsToArrive: 0,
      arrivalTime: 'Arriving'
   },
   {
      station: 'Random',
      direction: 'South',
      destination: 'Airport',
      color: 'red',
      secondsToArrive: 60,
      description: 'Southbound',
      arrivalTime: '1 min'
   },
   {
      station: 'Random',
      direction: 'East',
      destination: 'Indian Creek',
      color: 'green',
      description: 'Eastbound',
      secondsToArrive : 180,
      arrivalTime: '3 min'
   },
   {
      station: 'Random',
      direction: 'West',
      destination: 'Hamilton E Holmes',
      color: 'blue',
      description: 'Westbound',
      secondsToArrive: 720,
      arrivalTime: '5 min'
   }
];
