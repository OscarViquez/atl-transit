import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable, of, tap } from 'rxjs';
import { filterArrivals, findNearbyStations } from '../../utils';
import { GeolocationService, LocalStorageService, ApiService } from '../../services';
import {
  GeolocationState,
  TrainFeatureState,
  UserStationTrainArrivalData,
  GeoLocationCoord,
  TrainArrivalEndpointResponse,
} from '../../models';

@Injectable({
  providedIn: 'root',
})
export class TrainsStoreService {
  /**
   * This state is used to initialize the stateSubject and provides a default structure for the state.
   * It ensures that the state has a consistent shape and default values before any data is loaded.
   */
  private initialState: TrainFeatureState = {
    allTrainArrivals: [],
    nearestStations: [],
    savedStations: [],
    userLocationCoordinates: {} as GeoLocationCoord,
  };

  /**
   * A BehaviorSubject that holds the current state of the train feature.
   * This subject allows for state management and reactive updates.
   * Components can subscribe to this subject to get the latest state and react to changes.
   */
  private stateSubject: BehaviorSubject<TrainFeatureState> = new BehaviorSubject(this.initialState);

  constructor(
    private api: ApiService,
    private geolocationService: GeolocationService,
    private localStorageService: LocalStorageService
  ) {}

  /**
   * Initializes the feature state by fetching user location and train arrivals from the API.
   * The state is reset with the new data fetched from the API.
   * @returns An observable of the new train feature state.
   */
  public initializeFeatureState(): Observable<TrainFeatureState> {
    return combineLatest([this.getUserLocation(), this.getAllTrainArrivals()]).pipe(
      map(([location, arrivals]) => {
        const currentState = this.getState();
        const stationArrivals = this.getAllStationArrivals(arrivals, location.location);
        return {
          ...currentState,
          nearestStations: stationArrivals.nearestStations,
          savedStations: stationArrivals.savedStations,
        };
      }),
      tap(newState => this.setState(newState))
    );
  }

  /**
   * Refreshes the saved stations by recalculating the nearest and saved stations based on the current state.
   * @returns An observable of the updated train feature state.
   */
  public refreshSavedStations(): Observable<TrainFeatureState> {
    const currentState = this.getState();
    const { allTrainArrivals, userLocationCoordinates } = currentState;
    const stationArrivals = this.getAllStationArrivals(allTrainArrivals, userLocationCoordinates);
    const newState: TrainFeatureState = {
      ...currentState,
      nearestStations: stationArrivals.nearestStations,
      savedStations: stationArrivals.savedStations,
    };
    return of(newState).pipe(tap(state => this.setState(state)));
  }

  /**
   * Fetches all train arrivals from the API and updates the state with the fetched data.
   * @returns An observable of the train arrival data.
   */
  private getAllTrainArrivals(): Observable<TrainArrivalEndpointResponse[]> {
    return this.api
      .getTrainArrivals()
      .pipe(tap(data => this.updateState({ allTrainArrivals: data })));
  }

  /**
   * Fetches the user's location from the geolocation service and updates the state with the fetched data.
   * @returns An observable of the geolocation state.
   */
  private getUserLocation(): Observable<GeolocationState> {
    return this.geolocationService
      .getUserLocation()
      .pipe(
        tap(userLocation => this.updateState({ userLocationCoordinates: userLocation.location }))
      );
  }

  /**
   * Calculates the nearest and saved stations based on the train arrivals and user location.
   * @param arrivals The train arrival data.
   * @param coords The user's location coordinates.
   * @returns An object containing the nearest and saved stations.
   */
  private getAllStationArrivals(
    arrivals: TrainArrivalEndpointResponse[],
    coords: GeoLocationCoord
  ): UserStationTrainArrivalData {
    const nearestStations = findNearbyStations({ ...coords });
    const savedStations = this.localStorageService.getFromLocalStorage<string[]>('savedStations');
    return filterArrivals(arrivals, nearestStations, savedStations);
  }

  /**
   * Sets the new state for the train feature.
   * @param newState The new state to be set.
   */
  private setState(newState: TrainFeatureState): void {
    this.stateSubject.next(newState);
  }

  /**
   * Gets the current state of the train feature.
   * @returns The current train feature state.
   */
  private getState(): TrainFeatureState {
    return this.stateSubject.getValue();
  }

  /**
   * Updates the state with a partial state object.
   * The partial state is merged with the current state to create the new state.
   * @param partialState The partial state to be merged with the current state.
   */
  private updateState(partialState: Partial<TrainFeatureState>): void {
    this.setState({ ...this.getState(), ...partialState });
  }
}
