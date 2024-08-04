import { Amenities, BusRoutes, Header, TrainArrivalDetails } from '@atl-transit/core';

export interface StationDetailsPage {
  header: Header; // Will be used to display the station name
  arrivals: TrainArrivalDetails[]; // Array of Upcoming Train Arrivals
  busRoutes: BusRoutes[]; // Array of Bus Routes
  amenities: Amenities[]; // Array of Amenities
  isSaved: boolean; // Boolean property to indicate if the station is saved
  onSave?: () => void; // Method to handle "Save" button click
}

export interface StationDetailsPageMessaging {
  noArrivals: Header; // if either no arrivals or info available
  noAmenities: Header; // if no amenities available
  noBusRoutes: Header; // if no bus routes available
}
