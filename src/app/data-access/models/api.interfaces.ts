// GEO-LOCATION ( BROWSER & SERVER API )
export interface GeoLocationCoord {
  latitude: number;
  longitude: number;
}

// TRAINS SERVER API
export interface TrainArrivalEndpointResponse {
  // The final end of the rail line destination of the train
  DESTINATION: string;
  // The direction bound of the train
  DIRECTION: string;
  EVENT_TIME: string;
  IS_REALTIME: string;
  LINE: string;
  NEXT_ARR: string;
  STATION: string;
  TRAIN_ID: string;
  WAITING_SECONDS: string;
  WAITING_TIME: string;
  IS_END_OF_SERVICE: string;
  IS_FIRST_STOP: string;
  HAS_STARTED_TRIP: string;
  TRACK_LOCATION: string;
  TRACK_CIRCUIT: string;
  TRIP_ID: string;
}

// STATIONS SERVER API
export interface StationDetailsEndpointResponse {
  // The name of the station
  name: string;
  // The station's description
  description: string;
  // All bus routes that stops at the station
  routes: StationEndpointBusRoute[];
  // All amenities that the station has
  amenities: StationEndpointAmenity[];
  // All upcoming train arrivals at the station
  arrivals: TrainArrivalEndpointResponse[];
}

export interface StationEndpointBusRoute {
  // The route number of the bus e.g "141"
  routeNumber: string;
  // The name of the bus route: e.g "Perimeter Center St."
  routeName: string;
}

export interface StationEndpointAmenity {
  // The name of the amenity
  amenityName: string;
}

export type TrainStatus = number | 'Arriving' | 'Delayed';

// BUS TRACKER ENDPOINT
export interface MartaBusFeedResponse {
  // Represents the route_id of the bus
  VEHICLE_ID: string;
  LATITUDE: string;
  LONGITUDE: string;
  TS_HISTORY: string[];
}

export interface GtfsRealtimeBusResponse {
  header: {
    // It is the version of the GTFS-realtime specification with which this feed is compatible
    gtfsRealtimeVersion: string;
    // Indicates whether the current feed is a full update of all known entities or whether it is a partial update
    incrementality: string;
    // timestamp is the moment at which the content of this feed was created
    timestamp: string;
  };
  // Is a list of entities being reported on in the current feed
  entity: Entity[];
}

export interface Entity {
  // Just to identify the entity itself.
  id: string;
  // Information about the vehicle being reported on in the current feed
  vehicle: Vehicle;
}

export interface Vehicle {
  // Information about the trip that the vehicle is serving
  trip: Trip;
  // Information about the position of the vehicle
  position: BusPosition;
  // timestamp is the moment at which the position of the vehicle was measured
  timestamp: string;
  // Information about the vehicle itself such as its ID and label
  vehicle: VehicleDetails;
}

export interface Trip {
  // tripId is a unique identifier for the trip
  tripId: string;
  // startDate is the date on which the vehicle's trip began
  startDate: string;
  // routeId identifies the route number that the vehicle is serving
  routeId: string;
}

export interface BusPosition {
  // latitude is the position of the vehicle in degrees
  latitude: number;
  // longitude is the position of the vehicle in degrees
  longitude: number;
  // bearing is the direction of travel in degrees, where 0 is north, 90 is east, 180 is south, and 270 is west
  bearing: number;
}

export interface VehicleDetails {
  // id is used in order to verify the current route_id and trip_id of the vehicle
  id: string;
  // Referring to the public-facing ID on side the vehicle
  label: string;
}
