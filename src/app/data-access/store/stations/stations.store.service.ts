import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Observable, Subject, takeUntil } from 'rxjs';
import {
  StationDetailsAmenity,
  StationDetailsBusRoute,
  StationDetailsPage,
} from '../../../packages/stations/interfaces/station-details-page.interfaces';
import {
  StationDetailsEndpointResponse,
  StationEndpointAmenity,
  StationEndpointBusRoute,
} from '../../models/api.interfaces';
import { isStationSaved, transformToTrainArrivalDetails } from '../../utils/trains-utils';
import { LocalStorageService } from '../../services/local-storage/local-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StationsStoreService {
  public stationDetailsPageSubject = new Subject<StationDetailsPage>();

  private _stationDetailsEndpointResponse$!: Observable<StationDetailsEndpointResponse>;
  private _destroy$ = new Subject<void>();

  constructor(
    private api: ApiService,
    private localStorage: LocalStorageService
  ) {}

  setStationDetails(stationName: string): void {
    this._stationDetailsEndpointResponse$ = this.api.getStationDetails(stationName);

    this._stationDetailsEndpointResponse$.pipe(takeUntil(this._destroy$)).subscribe({
      next: stationDetails => {
        this.stationDetailsPageSubject.next(this.mapStationDetails(stationDetails));
      },
    });
  }

  private mapStationDetails(response: StationDetailsEndpointResponse): StationDetailsPage {
    const savedStations = this.localStorage.getFromLocalStorage<string[]>('savedStations');
    const captilizedSavedStations = savedStations.map(station => station.toUpperCase());
    return {
      header: {
        title: response.name,
        description: response.description,
      },
      busRoutes: this.mapStationDetailsBusRoutes(response.routes),
      amenities: this.mapStationDetailsAmenities(response.amenities),
      arrivals: transformToTrainArrivalDetails(response.arrivals),
      isSaved: isStationSaved(response.name, captilizedSavedStations),
    };
  }

  private mapStationDetailsBusRoutes(routes: StationEndpointBusRoute[]): StationDetailsBusRoute[] {
    return routes.map(route => {
      return {
        routeNumber: `Route ${route.routeNumber}`,
        street: route.routeName,
        serviceOperator: 'MARTA',
      };
    });
  }

  private mapStationDetailsAmenities(amenities: StationEndpointAmenity[]): StationDetailsAmenity[] {
    return amenities.map(amenity => {
      return {
        name: amenity.amenityName,
      };
    });
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }
}
