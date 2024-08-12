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
  // We first store the data in a subject, because with subjects we can emit new values to the subscribers continuously.
  private userStationTrainArrivalDataSubject = new Subject<UserStationTrainArrivalData>();

  // We then expose the subject as an observable to the component
  userStationTrainArrivalData$: Observable<UserStationTrainArrivalData> =
    this.userStationTrainArrivalDataSubject.asObservable();

  // We create a subscription to the subject to be able to unsubscribe from it when the component is destroyed.
  private geolocationSubscription!: Subscription;
  private trainArrivalSubscription!: Subscription;

  // We inject the services we need to use in the service
  constructor(
    private api: ApiService,
    private geolocationService: GeolocationService,
    private localStorageService: LocalStorageService
  ) {}

  /**
   * Train Page requires the user's location to be on to fetch the train arrivals nearest,
   * hence we subscribe to the geolocation state. However the user can also save stations to view their arrivals
   * but that can be done without the user's location being on.
   * */
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

  /**
   * With station details page, the user can view the arrivals of a specific station. We can call the same endpoint as the Train Page
   * but it's better to have a separate method to fetch the station details, so....
   * 1) we can easily unsubscribe from the Train Page method.
   * 2) We can easily add more logic to the station details method if needed.
   * 3) Speed up the process of fetching the train arrivals for this station since do not need to filter 1000+ objects
   *    to get the arrivals of a single station.
   * */
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

  // We unsubscribe from the subscriptions when the component is destroyed, this is to prevent memory leaks.
  ngOnDestroy(): void {
    if (this.geolocationSubscription) {
      this.geolocationSubscription.unsubscribe();
    }
    if (this.trainArrivalSubscription) {
      this.trainArrivalSubscription.unsubscribe();
    }
  }
}
