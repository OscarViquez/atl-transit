import { Injectable } from '@angular/core';
import { GeolocationService } from '../services/geolocation/geolocation.service';
import { Observable } from 'rxjs';
import { filterValidItems } from '../helpers/observable-helpers';
import { TrainsService } from '../services/trains/trains.service';
import { GeolocationState, UserStationTrainArrivalData } from '../models/state.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  geolocationState$!: Observable<GeolocationState>;

  isLocationOn$!: Observable<boolean>;

  trainPageArrivals$!: Observable<UserStationTrainArrivalData>;

  constructor(
    private geolocationService: GeolocationService,
    private trainService: TrainsService
  ) {}

  getGeolocationState(): void {
    this.geolocationService.initialize();
    this.geolocationState$ = filterValidItems(
      this.geolocationService.geolocationStateSubject.asObservable(),
      state => state.location.latitude !== 0 && state.location.longitude !== 0
    );
    this.isLocationOn$ = filterValidItems(
      this.geolocationService.isLocationOnSubject.asObservable(),
      isLocationOn => isLocationOn !== null
    );
  }

  getAllTrainArrivals(): void {
    this.trainService.initialize();
    this.trainPageArrivals$ = this.trainService.userStationTrainArrivalData$;
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
