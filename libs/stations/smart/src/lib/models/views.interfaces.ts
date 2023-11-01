import { Tab, GenericHeader } from 'shared';
import { TrainStaion } from '@atl-transit/stations';

export interface TrainArrivalPage {
   tab: Tab[];
   header: GenericHeader;
   trainData?: TrainStaion[];
}
