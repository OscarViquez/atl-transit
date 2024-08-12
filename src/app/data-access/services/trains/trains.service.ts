import { Injectable, OnDestroy } from '@angular/core';
import { catchError, Observable, of, Subject, Subscription } from 'rxjs';
import { ApiService } from '../api/api.service';
import { GeoLocation, TrainArrivalInfo } from '../../models/api.interfaces';
import { UserStationTrainArrivalData } from '../../models/state.interfaces';
import { GeolocationService } from '../geolocation/geolocation.service';
import { calculateDistanceBetweenCoordinates } from '../../helpers/calculation-helpers';
import { filterArrivals } from '../../helpers/trains-helpers';
import { STATIONS_INFO_CONSTANTS } from '../../constants/station-geolocation.constants';
import { LocalStorageService } from '../local-storage/local-storage.service';

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
    const nearestStations = this.getNearestStations({ ...geoLocation });
    const savedStations = this.localStorageService.getFromLocalStorage<string[]>('savedStations');
    const filteredStationsArrivals = filterArrivals(arrivals, nearestStations, savedStations);
    this.userStationTrainArrivalDataSubject.next({
      nearestStations: filteredStationsArrivals.nearestStations,
      savedStations: filteredStationsArrivals.savedStations,
    });
  }

  private getNearestStations(userLocation: GeoLocation): string[] {
    const distances = STATIONS_INFO_CONSTANTS.map(station => ({
      id: station.id,
      distance: calculateDistanceBetweenCoordinates(userLocation, {
        latitude: station.latitude,
        longitude: station.longitude,
      }),
    }));

    distances.sort((a, b) => a.distance - b.distance);
    return distances.slice(0, 2).map(station => station.id);
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
