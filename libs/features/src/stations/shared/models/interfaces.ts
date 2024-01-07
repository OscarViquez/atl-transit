/* eslint-disable @nx/enforce-module-boundaries */
import {
   Button,
   ButtonProps,
   ComponentState,
   GenericHeader,
   Tab,
   CardFeedback,
   Icon
} from '@atl-transit/shared';
import { Observable } from 'rxjs';

export interface TrainArrivalPage {
   tab: Tab[];
   header: GenericHeader;
   trainData?: TrainStation[];
}

export interface TrainStation {
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

export interface StationResource {
   id: number;
   icon: Icon;
   title: string;
   action?: string;
}

export interface StationDetails {
   station_key: string;
   name: string;
   description?: string;
   latitude: number;
   longitude: number;
   contactnumber?: string;
   connectingbusroutes?: BusRoutes[];
   ammenities_key: number[];
   arrivals: RailArrival[];
   lines?: string[];
}

export interface BusRoutes {
   routeID: number;
   name: string;
}

// TODO: rename this without interface word
export interface GeneralStationResponse {
   _station_key: string;
   name: string;
   _id: string;
   description: string;
   longitude: string;
   latitude: string;
   amenities: number[];
   contactnumber: string;
   busroutes: number[];
   lines?: string[];
   _schedule_key: number;
}

// TODO: rename this without interface word
export interface AmenityDetails {
   _id: string;
   _amenities_key: number;
   name: string;
   free: boolean;
   schedule: string;
   icon: string;
}

// TODO: rename this without interface word
export interface StationSchedule {
   _id: string;
   _schedule_key: number;
   alllines: TrainLineSchedule[];
}

// TODO: rename this without interface word
export interface TrainLineSchedule {
   line: string;
   schedules: TrainDaySchedule[];
}

// TODO: rename this without interface word
export interface TrainDaySchedule {
   direction: string;
   day: string;
   schedule: number[];
}

interface ErrorMocks<T> {
   [key: string]: T;
}

export type StationCardFeedbackMessage = ErrorMocks<CardFeedback>;

export type GenericFeedbackMessage =
   | 'No Saved Stations'
   | 'No Stations Found'
   | 'No Arrivals Found'
   | 'No Stations Found';

export interface TrainPageContent {
   header: ArrivalHeaders;
   tab: ButtonProps[];
   feedback: StationCardFeedbackMessage;
   tiles: StationResource[];
   config: TrainPageConfig;
}

export interface TrainPageConfig {
   maxStationArrivals: number;
   maxRailArrivals: number;
   currentTabIndex: number;
}

export interface ArrivalHeaders {
   main: GenericHeader;
   explore: GenericHeader;
}

export interface StationDetailsPageContent {
   label: string
}

export interface TrainContentInit {
   content: TrainPageContent;
   data$: Observable<{ loading: boolean; trains: TrainStation[] }>;
}

export interface StationDetailsInit {
   content: StationDetailsPageContent;
   data$: Observable<StationDetailsData>
}

export interface StationDetailsData {
   station?: GeneralStationResponse;
   currentStation?: GeneralStationResponse,
   amenities?: AmenityDetails[];
   schedule?: StationSchedule;
 }