import { Header, TrainArrivalDetails } from '@atl-transit/core';

export interface StationDetailsPage {
  header: Header; // Will be used to display the station name
  arrivals: TrainArrivalDetails[]; // Array of Upcoming Train Arrivals
  busRoutes: StationDetailsBusRoute[]; // Array of Bus Routes
  amenities: StationDetailsAmenity[]; // Array of Amenities
  isSaved: boolean; // Boolean property to indicate if the station is saved
  onSave?: () => void; // Method to handle "Save" button click
}

export interface StationDetailsBusRoute {
  routeNumber: string; // Name of the bus route. e.g. "Route 123"
  street: string; // Street that the bus route travels on. e.g. "Peachtree ST"
  serviceOperator: string; // Operator of the bus route. e.g. "MARTA" or "COBBLINC"
  link?: string; // Link to the bus route page
}

export interface StationDetailsAmenity {
  name: string; // Name of the amenity. e.g. "Restroom"
}

export interface StationDetailsPageMessaging {
  noArrivals: Header; // if either no arrivals or info available
  noAmenities: Header; // if no amenities available
  noBusRoutes: Header; // if no bus routes available
}
