import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StationTrainArrivalCard } from '@atl-transit/core';
import { LocalStorageService } from '../services/local-storage/local-storage.service';
import { TrainsStoreService } from '../store/trains/trains.store.service';
import { UserStoreService } from '../store/user/user.store.service';
import { GeolocationState } from '../models/state.interfaces';
import { SearchStoreService } from '../store/search/search.store.service';
import { SearchResults } from '../../packages/search/interfaces/search.interfaces';
import { StationsStoreService } from '../store/stations/stations.store.service';
import { StationDetailsPage } from '../../packages/stations/interfaces/station-details-page.interfaces';

@Injectable({
  providedIn: 'root',
})
export class FacadeService {
  geoLocation$!: Observable<GeolocationState>;
  savedStations$!: Observable<StationTrainArrivalCard[]>;
  nearbyStations$!: Observable<StationTrainArrivalCard[]>;
  stationDetails$!: Observable<StationDetailsPage>;

  constructor(
    private userStore: UserStoreService,
    private storageService: LocalStorageService,
    private trainsStore: TrainsStoreService,
    private searchStore: SearchStoreService,
    private stationsStore: StationsStoreService
  ) {}

  updateGeolocation(): void {
    this.userStore.updateGeolocationPreference();
    this.geoLocation$ = this.userStore.geoLocationStateSubject.asObservable();
  }

  fetchAllArrivals(): void {
    this.trainsStore.fetchAllArrivals();
    this.nearbyStations$ = this.trainsStore.nearestStationsSubject.asObservable();
    this.savedStations$ = this.trainsStore.savedStationsSubject.asObservable();
  }

  fetchSearchResultsList(): SearchResults[] {
    return [this.searchStore.mapAllStationsList()];
  }

  fetchStationDetails(stationName: string): void {
    this.stationsStore.setStationDetails(stationName);
    this.stationDetails$ = this.stationsStore.stationDetailsPageSubject.asObservable();
  }

  addStationToSaved(stationName: string): void {
    this.storageService.saveToLocalStorage<string>('savedStations', stationName);
  }

  removeStationFromSaved(stationName: string): void {
    this.storageService.removeFromLocalStorage<string>('savedStations', stationName);
  }

  updateTrainPageCards(): void {
    this.trainsStore.updateOnSaveTrainArrivals();
  }
}
