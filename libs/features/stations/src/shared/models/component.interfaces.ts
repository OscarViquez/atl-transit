/* eslint-disable @nx/enforce-module-boundaries */
import { Button, ComponentState, GenericHeader, Tab } from 'shared';

export interface TrainArrivalPage {
   tab: Tab[];
   header: GenericHeader;
   trainData?: TrainStaion[];
}

export interface TrainStaion {
   header: GenericHeader;
   /* Rail Arrivals */
   railArrivals: RailArrival[];
   /* Button Content and Data */
   button: Button;
   /* Component State */
   state?: ComponentState;
}

export interface RailArrival {
   /* Direction of Rail Cart */
   direction: string;
   /* Very Final Station of Rail Line */
   destination: string;
   /* text of rail line  (e.g: Northbound, Southbound, etc)  */
   description: string;
   /* text of rail color line (e.g: Red, Gold, etc)  */
   color: string;
   /* seconds remaining -- used for mapping*/
   secondsToArrive: number;
   /* time of arrival to current station */
   arrivalTime: string;
   /* current station */
   station: string;
}

export interface StationInterface {
   station_key: number;
   name: string;
   description?: string;
   latitude: number;
   longitude: number;
   contactnumber?: string;
   connectingbusroutes?: BusRoutes[];
   ammenities_key: number[];
   arrivals: RailArrival[];
}

export interface TrainInterface {
   train_id: number;
   currentStation: string;
   nextStation: string;
}

export interface BusRoutes {
   routeID: number;
   name: string;
}

export interface JsonStationInterface {
   station_key: number;
   name: string;
   description: string;
   longitude: string;
   latitude: string;
   amentities_key: number[];
   contactnumber: string;
   connectingbusroutes_key: number[];
}

export interface GenericTrainErrorMessage {
   title: 'No Saved Stations' | 'No Stations Found' | 'No Arrivals Found' | 'No Stations Found';
   description: string;
}
