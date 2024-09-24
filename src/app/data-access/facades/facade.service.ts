import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StationTrainArrivalCard } from '@atl-transit/core';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { TrainsStoreService } from '../store/trains/trains.store.service';
import { UserStoreService } from '../store/user/user.store.service';
import {
  GeolocationState,
  StationFeatureState,
  TrainFeatureState,
} from '../models/state.interfaces';
import { SearchStoreService } from '../store/search/search.store.service';
import { SearchResults } from '../../packages/search/interfaces/search.interfaces';
import { StationsStoreService } from '../store/stations/stations.store.service';
import { StationDetailsPage } from '../../packages/stations/interfaces/station-details-page.interfaces';
import { BusFeatureState, BusStoreService } from '../store/bus/bus-store.service';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  geoLocation$!: Observable<GeolocationState>;
  busFeatureState$!: Observable<BusFeatureState>;
  trainFeatureState$!: Observable<TrainFeatureState>;
  stationFeatureState$!: Observable<StationFeatureState>;

  constructor(
    private userStore: UserStoreService,
    private storageService: LocalStorageService,
    private trainsStore: TrainsStoreService,
    private searchStore: SearchStoreService,
    private stationsStore: StationsStoreService,
    private busStore: BusStoreService
  ) {}

  updateGeolocation(): void {
    this.userStore.updateGeolocationPreference();
    this.geoLocation$ = this.userStore.geoLocationStateSubject.asObservable();
  }

  fetchSearchResultsList(): SearchResults[] {
    return [this.searchStore.mapAllStationsList()];
  }

  fetchStationDetails(stationName: string): void {
    this.stationFeatureState$ = this.stationsStore.initializeFeatureState(stationName);
  }

  addStationToSaved(stationName: string): void {
    this.storageService.saveToLocalStorage<string>('savedStations', stationName);
  }

  removeStationFromSaved(stationName: string): void {
    this.storageService.removeFromLocalStorage<string>('savedStations', stationName);
  }

  refreshSavedStations(): void {
    this.trainFeatureState$ = this.trainsStore.refreshSavedStations();
  }

  getBusFeatureState(): void {
    this.busFeatureState$ = this.busStore.initializeFeatureState();
  }

  getTrainFeatureState(): void {
    this.trainFeatureState$ = this.trainsStore.initializeFeatureState();
  }
}
