// GEO-LOCATION ( BROWSER & SERVER API )
export interface GeoLocation {
  latitude: number;
  longitude: number;
}

export interface StationGeolocation {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
}

// TRAINS SERVER API
export interface TrainArrivalInfo {
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
