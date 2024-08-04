import { Badge } from '../types/ui.types';

export interface Header {
  title: string;
  description?: string;
  badges?: Badge[];
}

export interface NavMenuItem {
  label: string;
  routerLink: string;
}

export interface BusRoutes {
  name: string; // Name of the bus route. e.g. "Route 123"
  street: string; // Street that the bus route travels on. e.g. "Peachtree ST"
  serviceOperator: string; // Operator of the bus route. e.g. "MARTA" or "COBBLINC"
  link?: string; // Link to the bus route page
}

export interface Amenities {
  name: string; // Name of the amenity. e.g. "Restrooms"
  description: string; // Description of the amenity. e.g. "Public restrooms are available at this station"
  link?: string; // Link to the amenity page
  costType?: 'free' | 'paid'; // Indicates whether the amenity is free or paid
}

export interface ListItem {
  name: string;
  badgeLabel?: string;
  description: string;
}
