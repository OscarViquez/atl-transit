import {
   ComponentState,
   Header,
   Link,
   Card,
   ButtonLegacy,
   BadgeColor,
   Badge
} from '@atl-transit/shared';

/**
 * StationDetailsPage is an interface that defines the structure of a station details page.
 */
export interface StationDetailsPage {
   header: Header;
   badges: Badge[];
   about: string;
   arrivals: StationDetailsArrivals; // Real Time Arrivals
   schedule: Card; // Station's Schedule
   routes: StationDetailsBusRoutes; // Bus Routes
   amenities: StationDetailsAmenities; // Amenities
   parking?: Card; // Parking
}

export interface StationDetailsArrivals {
   header: Header;
   data: StationArrivalCard;
}

export interface StationDetailsBusRoutes {
   header: Header;
   data: StationBusRoute[];
}

export interface StationDetailsAmenities {
   header: Header;
   data: Card[];
}

export interface StationBusRoute {
   routeNumber: string;
   routeName: string;
   link: Link;
}

/**
 *
 *
 *
 * * Train Page Interfaces
 * * ==================================================================
 */

/**
 * TrainPage is an interface that defines the structure of a train page.
 * @property header - The heading for the page, which includes the title, subtitle, and badges.
 * @property nearest - The real-time arrival information for the nearest stations, which can be either an array of StationArrival objects or a Card.
 * @property saved - The real-time arrival information for the saved stations, which can be either an array of StationArrival objects or a Card.
 * @property resource - The resources related to the station.
 * @property map - The map of the station.
 */
export interface TrainPage {
   header: Header;
   tabs: string[];
   nearest: StationArrivalCard[];
   saved: StationArrivalCard[];
}

/**
 *
 *
 *
 * * Common Interfaces
 * * ==================================================================
 */

/**
 * * StationArrivalCard is an interface that defines the structure of a station arrival object.
 * @property id - A unique identifier for the station. This can be used for storing or saving the station in a database.
 * @property header - An object of type `Header` that contains the name and description of the station.
 * @property arrivals - An array of `StationArrivalItem` objects. Each `StationArrivalItem` object contains information about a train arrival, such as the arrival time and status.
 */
export interface StationArrivalCard {
   arrivals: StationArrivalItem[];
   header?: Header;
   id?: number;
   infoBox: StationRailLineInfoBox;
   isStationSaved?: boolean;
   link?: Link;
}

export interface StationArrivalList {
   nearest: StationArrivalCard[];
   saved: StationArrivalCard[];
}

export interface StationArrivalItem {
   time: string;
   destination: string;
   direction: string;
   line: BadgeColor;
   url?: string;
   label?: string;
}

export interface StationRailLineInfoBox {
   text: string;
   badges: Badge[];
}

/**
 *
 *
 *
 * * Data-Access Interfaces
 * * ==================================================================
 */

// TODO ✅ : @interface StationArrival Instead
export interface TrainStation {
   header: Header;
   trainArrivals: TrainArrival[];
   button: ButtonLegacy;
   state?: ComponentState;
}

// TODO ✅ :: Use @interface StationArrivalItem Instead
export interface TrainArrival {
   direction: string;
   destination: string;
   description: string;
   color: string;
   secondsToArrive: number;
   arrivalTime: string;
   station: string;
}

// TODO ✅ : KEEP THIS  Update @properties with new component interfaces
export interface StationDetails {
   stationKey: string;
   header: Header;
   supplementaryInformation: StationInformation;
   connectingBusRoutes: BusRoutes[];
   amenities: AmenityData[];
   allArrivals: TrainArrival[];
}

export interface StationInformation {
   latitude: number;
   longitude: number;
   contactNumber: string;
   address?: string;
}

// TODO: KEEP THIS ✅: Maybe need to rename this interface
export interface BusRoutes {
   routeID: number;
   name: string;
}

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

export interface AmenityData {
   _id: string;
   _amenities_key: number;
   name: string;
   free: boolean;
   schedule: string;
   icon: string;
}

export interface StationSchedule {
   _id: string;
   _schedule_key: number;
   alllines: TrainLineSchedule[];
}

export interface TrainLineSchedule {
   line: string;
   schedules: TrainDaySchedule[];
}

export interface TrainDaySchedule {
   direction: string;
   day: string;
   schedule: number[];
}
