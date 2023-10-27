import { Tab, GenericHeader } from 'shared';
import { TrainStaion } from 'stations-ui';

export interface TrainArrivalPage {
   tab: Tab[];
   header: GenericHeader;
   trainData?: TrainStaion[];
}
