import { DestroyRef, Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, takeUntil } from 'rxjs';
import { GeoLocationCoord, TrainArrivalEndpointResponse } from '../../models/api.interfaces';
import { filterArrivals, findNearbyStations } from '../../utils/trains-utils';
import { StationTrainArrivalCard } from '@atl-transit/core';
import { ApiService } from '../../services/api/api.service';
import { GeolocationService } from '../../services/geolocation/geolocation.service';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class TrainsStoreService {
  public nearestStationsSubject = new Subject<StationTrainArrivalCard[]>();
  public savedStationsSubject = new Subject<StationTrainArrivalCard[]>();

  private _allTrainsArrivalInfo$!: Observable<TrainArrivalEndpointResponse[]>;
  private _userCoordinates!: GeoLocationCoord;

  constructor(
    private api: ApiService,
    private geolocationService: GeolocationService,
    private localStorageService: LocalStorageService,
    private destroyRef: DestroyRef
  ) {}

  fetchAllArrivals(): void {
    this._allTrainsArrivalInfo$ = this.api.getTrainArrivals();
    this.geolocationService
      .getUserLocation()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(userGeolocation => {
        this._userCoordinates = userGeolocation.location;
        this._allTrainsArrivalInfo$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
          next: arrivals => {
            this.mapAllTrainArrivals(arrivals, this._userCoordinates);
          },
          error: () => {
            this.mapAllTrainArrivals([], this._userCoordinates);
          },
        });
      });
  }

  updateOnSaveTrainArrivals(): void {
    this._allTrainsArrivalInfo$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: arrivals => {
        this.mapAllTrainArrivals(arrivals, this._userCoordinates);
      },
    });
  }

  private mapAllTrainArrivals(
    arrivals: TrainArrivalEndpointResponse[],
    coordinates: GeoLocationCoord
  ): void {
    const nearestStations = findNearbyStations({ ...coordinates });
    const savedStations = this.localStorageService.getFromLocalStorage<string[]>('savedStations');
    const filteredStationsArrivals = filterArrivals(arrivals, nearestStations, savedStations);
    this.nearestStationsSubject.next(filteredStationsArrivals.nearestStations);
    this.savedStationsSubject.next(filteredStationsArrivals.savedStations);
  }
}
