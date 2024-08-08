import { Injectable } from '@angular/core';
import { catchError, Observable, of, Subject } from 'rxjs';
import { ApiService } from '../api/api.service';
import { GeoLocation, TrainArrivalInfo } from '../../models/api.interfaces';
import { UserStationTrainArrivalData } from '../../models/state.interfaces';
import { GeolocationService } from '../geolocation/geolocation.service';
import { calculateDistanceBetweenCoordinates } from '../../helpers/calculation-helpers';
import { filterArrivals } from '../../helpers/trains-helpers';
import { STATIONS_INFO_CONSTANTS } from '../../constants/station-geolocation.constants';

@Injectable({
  providedIn: 'root',
})
export class TrainsService {
  public userStationTrainArrivalDataSubject = new Subject<UserStationTrainArrivalData>();

  userStationTrainArrivalData$: Observable<UserStationTrainArrivalData> =
    this.userStationTrainArrivalDataSubject.asObservable();

  constructor(
    private api: ApiService,
    private geolocationService: GeolocationService
  ) {}

  initialize(): void {
    this.fetchAllTrainArrivals().subscribe({
      next: arrivals => {
        this.getUserTrainArrivals(arrivals);
      },
      error: err => console.error('Failed to fetch train arrivals', err),
    });
  }

  private fetchAllTrainArrivals(): Observable<TrainArrivalInfo[]> {
    return this.api.getTrainArrivals().pipe(
      catchError(err => {
        console.error('Failed to fetch train arrivals', err);
        return of([]);
      })
    );
  }

  private getUserTrainArrivals(arrivals: TrainArrivalInfo[]): void {
    this.geolocationService.geolocationStateSubject.subscribe(state => {
      const geoLocation: GeoLocation = {
        latitude: state.location.latitude ?? 0,
        longitude: state.location.longitude ?? 0,
      };
      const nearestStations = this.getNearestStations({ ...geoLocation });
      const savedStations = this.getSavedStations();
      const filteredStationsArrivals = filterArrivals(arrivals, nearestStations, savedStations);

      this.userStationTrainArrivalDataSubject.next({
        nearestStations: filteredStationsArrivals.nearestStations,
        savedStations: filteredStationsArrivals.savedStations,
      });
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

    // Sorting by Closest to farthest distance
    distances.sort((a, b) => a.distance - b.distance);
    return distances.slice(0, 2).map(station => station.id);
  }

  SaveStationToLocalStorage(stationName: string): void {
    const savedStations = this.getSavedStations();
    savedStations.push(stationName);
    localStorage.setItem('savedStations', JSON.stringify(savedStations));
  }

  RemoveStationFromLocalStorage(stationName: string): void {
    const savedStations = this.getSavedStations();
    const updatedStations = savedStations.filter(station => station !== stationName);
    localStorage.setItem('savedStations', JSON.stringify(updatedStations));
  }

  private getSavedStations(): string[] {
    const savedStations = localStorage.getItem('savedStations');
    if (!savedStations) {
      return [];
    }
    return JSON.parse(savedStations);
  }
}
