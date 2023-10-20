import { Tab, Header } from 'shared';
import { TrainStaion } from 'stations-ui';

export interface TrainArrivalPage {
   tab: Tab[];
   header: Header;
   trainData?: TrainStaion[];
}
