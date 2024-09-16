// GEO-LOCATION ( BROWSER & SERVER API )
export interface GeoLocationCoord {
  latitude: number;
  longitude: number;
}

// TRAINS SERVER API
export interface TrainArrivalEndpointResponse {
  DESTINATION: string;
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
  name: string;
  description: string;
  routes: StationEndpointBusRoute[];
  amenities: StationEndpointAmenity[];
  arrivals: TrainArrivalEndpointResponse[];
}

export interface StationEndpointBusRoute {
  routeNumber: string;
  routeName: string;
}

export interface StationEndpointAmenity {
  amenityName: string;
}

export type TrainStatus = number | 'Arriving' | 'Delayed';
