import {
  StationDetailsAmenity,
  StationDetailsBusRoute,
} from '../../packages/stations/interfaces/station-details-page.interfaces';
import { StationEndpointAmenity, StationEndpointBusRoute } from '../models/api.interfaces';

export function getStationBusRoutes(routes: StationEndpointBusRoute[]): StationDetailsBusRoute[] {
  return routes.map(route => ({
    routeNumber: `Route ${route.routeNumber}`,
    street: route.routeName,
    serviceOperator: 'MARTA', // We can make this dynamic if we get data for other service operators
  }));
}

export function getStationAmenities(amenities: StationEndpointAmenity[]): StationDetailsAmenity[] {
  return amenities.map(amenity => ({ name: amenity.amenityName }));
}
