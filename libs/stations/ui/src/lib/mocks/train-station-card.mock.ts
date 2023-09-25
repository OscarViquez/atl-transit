import { ButtonLightModeMock } from 'shared';
import { TrainStaion } from '../models';
import { RailArrivalMock } from './rail-arrival-card.mock';

export const TrainStationMock: TrainStaion = {
   header: {
      title: 'Five Points',
      subtitle: 'All Rail Lines Available'
   },
   railArrivals: RailArrivalMock,
   button: ButtonLightModeMock
};
