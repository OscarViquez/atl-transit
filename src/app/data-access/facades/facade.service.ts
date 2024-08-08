import { Injectable } from '@angular/core';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { Observable } from 'rxjs';
import { filterAndMapArrivalsFromFlag, filterValidItems } from '../helpers/observable-helpers';
import { TrainsService } from '../services/trains/trains.service';
import { GeolocationState, UserStationTrainArrivalData } from '../models/state.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  geolocationState$!: Observable<GeolocationState>;

  isLocationOn$!: Observable<boolean>;

  userLocSelectionMade$!: Observable<boolean>;

  trainPageArrivals$!: Observable<UserStationTrainArrivalData>;

  constructor(
    private geolocationService: GeolocationService,
    private trainService: TrainsService
  ) {}

  getGeolocationState(): void {
    this.geolocationService.initialize();
    this.geolocationState$ = filterValidItems(
      this.geolocationService.geolocationStateSubject.asObservable(),
      state => !state.userSelectionMade
    );
    this.isLocationOn$ = filterValidItems(
      this.geolocationService.isLocationOnSubject.asObservable(),
      isLocationOn => isLocationOn !== null
    );
    this.userLocSelectionMade$ = filterValidItems(
      this.geolocationService.userSelectionMade$.asObservable(),
      state => state
    );
  }

  /**
   * TODO: refactor service later to handle logic for train page and train tracker.
   * This might mean we need to seperate the logic and do some abstracton on services methods.
   */
  getAllTrainArrivals(): void {
    this.trainService.initialize();
    this.trainPageArrivals$ = this.trainService.userStationTrainArrivalData$;
  }

  getStationDetails(): void {
    // based on the route of the page, get the station details
  }

  saveStation(stationName: string): void {
    this.trainService.SaveStationToLocalStorage(stationName);
    this.getAllTrainArrivals();
  }

  removeStation(stationName: string): void {
    this.trainService.RemoveStationFromLocalStorage(stationName);
    this.getAllTrainArrivals();
  }
}
