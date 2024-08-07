import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { GeolocationState } from '../../models/state.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  public isLocationOnSubject = new BehaviorSubject<boolean>(false);

  public geolocationStateSubject = new BehaviorSubject<GeolocationState>({
    location: { latitude: 0, longitude: 0 },
    error: null,
  });

  initialize() {
    this.getCurrentPosition()
      .then(position => {
        this.geolocationStateSubject.next({
          ...this.geolocationStateSubject.value,
          location: {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          },
          error: null,
        });
        this.isLocationOnSubject.next(true);
      })
      .catch(error => {
        this.geolocationStateSubject.next({
          ...this.geolocationStateSubject.value,
          error,
        });
        this.isLocationOnSubject.next(false);
      });
  }

  private getCurrentPosition(): Promise<GeolocationPosition> {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => resolve(position),
          error => reject(this.handleLocationError(error))
        );
      } else {
        reject(new Error('Geolocation is not supported by this browser.'));
      }
    });
  }

  private handleLocationError(error: GeolocationPositionError): string {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        return 'User denied the request for Geolocation.';
      case error.POSITION_UNAVAILABLE:
        return 'Location information is unavailable.';
      case error.TIMEOUT:
        return 'The request to get user location timed out.';
      default:
        return 'An unknown error occurred.';
    }
  }
}
