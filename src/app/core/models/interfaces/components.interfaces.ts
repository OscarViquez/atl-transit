import { BadgeColor, Link } from '../types/ui.types';
import { Header } from './ui.interface';

export interface StationTrainArrivalCard {
  /**
   * Header information for the station, used to display the station name.
   */
  header: Header;

  /**
   * Array of upcoming train arrivals, e.g., '5 mins', '10 mins', '15 mins', 'Arriving', 'Delayed'.
   */
  arrivals: TrainArrivalDetails[];

  // serviceLines: StationServiceLine[]; // Array of service lines that stop at the station

  /**
   * Link to the station page.
   */
  link: Link;

  /**
   * Boolean property to indicate if the station is saved.
   */
  isSaved: boolean;
}

export interface TrainArrivalDetails {
  /**
   * Unique identifier for the train arrival, typically the station name, e.g., 'Brookhaven', 'Doraville'.
   */
  id: string;

  /**
   * Amount of minutes until the arrival of the train.
   */
  arrivalTime: string;

  /**
   * Final destination of the train.
   */
  destination: string;

  /**
   * Cardinal direction of the train.
   */
  cardinalDirection: string;

  /**
   * Color of the line associated with the train.
   */
  lineColor: BadgeColor;

  /**
   * Arrival time of the train in timestamp format (optional).
   */
  arrivalTimestamp?: string;

  /**
   * Link to the train tracker page (optional).
   */
  link?: Link;
}

export interface StationServiceLine {
  /**
   * Color of the line.
   */
  lineColor: BadgeColor;

  /**
   * Name of the line.
   */
  lineName: string;
}
