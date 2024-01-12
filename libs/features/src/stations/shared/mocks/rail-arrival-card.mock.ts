import { TrainArrival } from '../../shared';
import { ButtonLightModeMock } from '@atl-transit/shared';
import { TrainStation } from '../../shared';

const RailArrivalMock: TrainArrival[] = [
   {
      station: 'Random',
      direction: 'North',
      destination: 'Doraville',
      color: 'gold',
      secondsToArrive: 0,
      description: 'Northbound',
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
      secondsToArrive: 180,
      description: 'Eastbound',
      arrivalTime: '3 min'
   },
   {
      station: 'Random',
      direction: 'West',
      destination: 'Hamilton E Holmes',
      color: 'blue',
      secondsToArrive: 300,
      description: 'Westbound',
      arrivalTime: '5 min'
   }
];

export const TrainStationMock: TrainStation = {
   header: {
      title: 'Five Points',
      subtitle: 'All Rail Lines Available'
   },
   trainArrivals: RailArrivalMock,
   button: ButtonLightModeMock,
   state: {
      isLoading: false,
      systemMode: 'light',
      error: true
   }
};

