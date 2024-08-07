import { BadgeColor, Link } from '../types/ui.types';
import { Header } from './ui.interface';

export interface StationTrainArrivalCard {
  header: Header; // Will be used to display the station name
  arrivals: TrainArrivalDetails[]; // Array of Upcoming Train Arrivals e.g. '5 mins', '10 mins', '15 mins', 'Arriving', 'Delayed'
  // serviceLines: StationServiceLine[]; // Array of service lines that stop at the station
  link: Link; // Link to the station page
  isSaved: boolean; // Boolean property to indicate if the station is saved
}

export interface TrainArrivalDetails {
  id: string; // we will use the station name as the id. e.g. 'Brookhaven', 'Doraville'
  arrivalTime: string; // Amount of minutes until arrival of train
  destination: string; // Final destination of the train
  cardinalDirection: string; // Cardinal direction of the train
  lineColor: BadgeColor; // Color of the line associated with the train
  arrivalTimestamp?: string; // Arrival time of the train in timestamp format
  link?: Link; // Link to the train tracker page
}

export interface StationServiceLine {
  lineColor: BadgeColor; // Color of the line
  lineName: string; // Name of the line
}
