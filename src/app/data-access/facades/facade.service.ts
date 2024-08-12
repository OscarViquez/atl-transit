import { Injectable } from '@angular/core';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { Observable } from 'rxjs';
import { filterValidItems } from '../helpers/observable-helpers';
import { TrainsService } from '../services/trains/trains.service';
import { GeolocationState, UserStationTrainArrivalData } from '../models/state.interfaces';
import { StationsService } from '../services/stations/stations.service';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  geolocationState$!: Observable<GeolocationState>;

  isLocationOn$!: Observable<boolean>;

  userLocSelectionMade$!: Observable<boolean>;

  trainPageArrivals$!: Observable<UserStationTrainArrivalData>;

  constructor(
    private geolocate: GeolocationService,
    private train: TrainsService,
    private station: StationsService
  ) {}

  getGeolocationState(): void {
    this.geolocate.initialize();
    this.geolocationState$ = filterValidItems(
      this.geolocate.geolocationStateSubject.asObservable(),
      state => !state.userSelectionMade
    );
    this.isLocationOn$ = filterValidItems(
      this.geolocate.isLocationOnSubject.asObservable(),
      isLocationOn => isLocationOn !== null
    );
    this.userLocSelectionMade$ = filterValidItems(
      this.geolocate.userSelectionMade$.asObservable(),
      state => state
    );
  }

  getAllTrainArrivals(): void {
    this.train.fetchTrainPageArrivals();
    this.trainPageArrivals$ = this.train.userStationTrainArrivalData$;
  }

  getStationDetails(): void {
    // based on the route of the page, get the station details
  }

  saveStation(stationName: string): void {
    this.station.saveStationToLocalStorage(stationName);
    this.getAllTrainArrivals();
  }

  removeStation(stationName: string): void {
    this.station.removeStationFromLocalStorage(stationName);
    this.getAllTrainArrivals();
  }
}
