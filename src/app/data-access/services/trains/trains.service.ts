import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';

import { GeoLocation, TrainArrivalInfo } from '../../models/api.interfaces';
import { UserStationTrainArrivalData } from '../../models/state.interfaces';

import { GeolocationService } from '../geolocation/geolocation.service';
import { filterArrivals, getNearestStations } from '../../helpers/trains-helpers';

import { LocalStorageService } from '../local-storage/local-storage.service';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root',
})
export class TrainsService implements OnDestroy {
  private userStationTrainArrivalDataSubject = new Subject<UserStationTrainArrivalData>();

  private geolocationSubscription!: Subscription;

  private trainArrivalSubscription!: Subscription;

  userStationTrainArrivalData$: Observable<UserStationTrainArrivalData> =
    this.userStationTrainArrivalDataSubject.asObservable();

  constructor(
    private api: ApiService,
    private geolocationService: GeolocationService,
    private localStorageService: LocalStorageService
  ) {}

  fetchTrainPageArrivals(): void {
    this.trainArrivalSubscription = this.api.getTrainArrivals().subscribe({
      next: arrivals => {
        this.geolocationService.geolocationStateSubject.subscribe(geoLocation => {
          this.mapNearAndSavedTrainArrivals(arrivals, geoLocation.location);
        });
      },
      error: err => {
        this.geolocationService.geolocationStateSubject.subscribe(geoLocation => {
          this.mapNearAndSavedTrainArrivals([], geoLocation.location);
        });
        console.error('Failed to fetch train arrivals', err);
      },
    });
  }

  fetchStationDetailsArrivals(station: string): void {
    this.trainArrivalSubscription = this.api.getTrainArrivals().subscribe({
      next: arrivals => {
        this.geolocationService.geolocationStateSubject.subscribe(geoLocation => {
          this.mapNearAndSavedTrainArrivals(arrivals, geoLocation.location);
        });
      },
      error: err => console.error('Failed to fetch train arrivals', err),
    });
  }

  private mapNearAndSavedTrainArrivals(
    arrivals: TrainArrivalInfo[],
    geoLocation: GeoLocation
  ): void {
    const nearestStations = getNearestStations({ ...geoLocation });
    const savedStations = this.localStorageService.getFromLocalStorage<string[]>('savedStations');
    const filteredStationsArrivals = filterArrivals(arrivals, nearestStations, savedStations);
    this.userStationTrainArrivalDataSubject.next({
      nearestStations: filteredStationsArrivals.nearestStations,
      savedStations: filteredStationsArrivals.savedStations,
    });
  }

  ngOnDestroy(): void {
    if (this.geolocationSubscription) {
      this.geolocationSubscription.unsubscribe();
    }
    if (this.trainArrivalSubscription) {
      this.trainArrivalSubscription.unsubscribe();
    }
  }
}
