import { ButtonLightModeMock } from 'shared';
import { RailArrivalMock } from './rail-arrival-card.mock';
import { TrainStaion } from '../../shared';

export const TrainStationMock: TrainStaion = {
   header: {
      title: 'Five Points',
      subtitle: 'All Rail Lines Available'
   },
   railArrivals: RailArrivalMock,
   button: ButtonLightModeMock,
   state: {
      isLoading: false,
      systemMode: 'light',
      error: true
   }
};
