import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Header } from '@atl-transit/core';
import { ApiService, LocalStorageService } from '../../services';
import { StationFeatureState, StationDetailsEndpointResponse } from '../../models';
import {
  formatStationName,
  isStationSaved,
  sortTrainArrivalDetails,
  getTrainArrivalDetails,
  getStationBusRoutes,
} from '../../utils';

@Injectable({
  providedIn: 'root',
})
export class StationsStoreService {
  /**
   * This state is used to initialize the stateSubject and provides a default structure for the state.
   * It ensures that the state has a consistent shape and default values before any data is loaded.
   */
  private initialState: StationFeatureState = {
    header: {} as Header,
    arrivals: [],
    busRoutes: [],
    amenities: [],
    isSaved: false,
  };

  /**
   * This subject allows for state management and reactive updates.
   * Components can subscribe to this subject to get the latest state and react to changes.
   */
  private stateSubject: BehaviorSubject<StationFeatureState> = new BehaviorSubject(
    this.initialState
  );

  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService
  ) {}

  /**
   * Initializes the feature state by fetching station details from the API.
   * The state is reset with the new data fetched from the API.
   * @param station The name of the station for which details are to be fetched.
   * @returns An observable of the new station feature state.
   */
  public initializeFeatureState(station: string): Observable<StationFeatureState> {
    return this.api.getStationDetails(station).pipe(
      map(station => {
        const stationArrivals = this.mapStationDetails(station);
        return {
          ...stationArrivals,
        };
      }),
      tap(newState => this.setState(newState))
    );
  }

  /**
   * Maps the station details from the API response to the StationDetailsPage format.
   * @param details The station details fetched from the API.
   * @returns The mapped station details in the StationDetailsPage format.
   */
  private mapStationDetails(details: StationDetailsEndpointResponse): StationFeatureState {
    const savedStations = this.localStorage.getFromLocalStorage<string[]>('savedStations');
    const captilizedSavedStations = savedStations.map(station => station.toUpperCase());
    return {
      header: {
        title: formatStationName(details.name),
        description: details.description,
      },
      busRoutes: getStationBusRoutes(details.routes),
      amenities: details.amenities.map(amenity => ({ name: amenity.amenityName })),
      arrivals: sortTrainArrivalDetails(getTrainArrivalDetails(details.arrivals)),
      isSaved: isStationSaved(details.name, captilizedSavedStations),
    };
  }

  /**
   * Sets the new state for the station feature.
   * @param newState The new state to be set.
   */
  private setState(newState: StationFeatureState): void {
    this.stateSubject.next(newState);
  }
}
