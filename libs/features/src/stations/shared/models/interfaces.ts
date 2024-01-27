import {
   ComponentState,
   Icon,
   Header,
   Link,
   Card,
   GenericCard,
   ButtonLegacy
} from '@atl-transit/shared';

/**
 *
 *
 *
 * * Station Feature Pages Interfaces
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
   nearest: StationArrival[] | Card;
   saved: StationArrival[] | Card;
   resource: StationResources;
   map: StationMap;
}

/**
 * StationDetailsPage is an interface that defines the structure of a station details page.
 * @property header - The general information of the station, including the name of the station, description, and badges.
 * @property scheduleInfo - The content for the scheduled arrival card.
 * @property arrivals - The real-time arrival information for the station, which can be either a StationArrival object or a Card.
 * @property amenity - The information about the station amenities.
 * @property bus - The information about the bus routes connecting to the station.
 * @property map - The content for the station map.
 * @property parking - The content for the station parking.
 */
export interface StationDetailsPage {
   header: Header;
   scheduleInfo: Card;
   arrivals: StationArrival | Card;
   amenity: StationAmenity;
   bus: StationBusRoute;
   map: StationMap;
   parking: StationParking;
}

/**
 *
 *
 *
 * * Component Interfaces
 * * ==================================================================
 */

/**
 * * StationArrival is an interface that defines the structure of a station arrival object.
 * @property id - A unique identifier for the station. This can be used for storing or saving the station in a database.
 * @property header - An object of type `Header` that contains the name and description of the station.
 * @property arrivals - An array of `StationArrivalSlot` objects. Each `StationArrivalSlot` object contains information about a train arrival, such as the arrival time and status.
 */
export interface StationArrival {
   _id: number;
   header: Header;
   arrivals: StationArrivalSlot[];
}

/**
 * StationArrivalSlot is an interface that defines the structure of a train arrival slot at a station.
 * @property time - The time when the train will arrive at the station. This could be a relative time (e.g., "5 min", or "Arriving").
 * @property destination - The final station that the train is heading to. This is typically the end of the line for the train (e.g., "Doraville", "Airport").
 * @property direction - The direction that the train is heading in. This is typically a cardinal direction (e.g., "North", "South", "East", "West").
 * @property line - The line that the train is on. This is typically identified by a color (e.g., "Red", "Gold", "Blue").
 */
export interface StationArrivalSlot {
   time: string;
   destination: string;
   direction: string;
   line: string;
}

/**
 * StationBusRoute is an interface that defines the structure of bus routes at a station.
 * @property header - Contains the station name and description.
 * @property busRoutes - An array containing information about each bus route. (e.g. Bus Route Name, Bus Route Description)
 */
export interface StationBusRoute {
   header: Header;
   routes: BusRoutesSlot[];
}

/**
 * BusRoutesSlot is an interface that defines the structure of a bus route at a station.
 * @property image - The icon representing the bus route.
 * @property route - The identifier for the bus route.
 * @property description - The description of the bus route.
 * @property link - The link to more information about the bus route.
 */
export interface BusRoutesSlot {
   image: Icon;
   route: string;
   description: string;
   link: Link;
}

/**
 * StationMap is an interface that defines the structure of a bus route at a station.
 * @property image - The icon for the map.
 * @property description - Message for map.
 * * NOTE: all of these properties are placeholders and will be replaced with the actual properties once the design is finalized.
 */
export interface StationMap {
   image: Icon;
   description: string;
}

/**
 * StationAmenity is a type based on the GenericCard type, with specific types for its generic parameters:
 * @property Header - The type for the header of the station amenity card.
 * @property Card[] - The type for the content of the station amenity card, (e.g The Ride Store, Restrooms, Offering ways to reload your card and get snacks, and buy toiletries.)
 *  * This Type will be used for Station Amenity Component
 */
export type StationAmenity = GenericCard<Header, Card[]>;

/**
 * StationParking is a type based on the GenericCard type, with specific types for its generic parameters:
 * @property Header - The type for the header of the station parking card.
 * @property Card[] - The type for the content of the station parking card,
 *  * This Type will be used for Station Parking Component
 */
export type StationParking = GenericCard<Header, Card>;

/**
 * StationResources is a type based on the GenericCard type, with specific types for its generic parameters:
 * @property Header - The type for the header of the station resources card.
 * @property Card[] - The type for the content of the station resources card,
 * * This Type will be used for Station Resources / Explore Resources
 */
export type StationResources = GenericCard<Header, Card[]>;

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

// TODO ✅ :: Use @interface StationArrivalSlot Instead
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
