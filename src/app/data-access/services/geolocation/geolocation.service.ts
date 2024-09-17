import { Injectable } from '@angular/core';
import { BROWSER_AGENT, BROWSER_PERMISSION_STATE } from '../../constants/browser-api.constants';
import { GeolocationState } from '../../models/state.interfaces';
import { DEFAULT_USER_GEO_POSITION_CONSTANT } from '../../constants/geolocation.constants';
import { GeoLocationCoord } from '../../models/api.interfaces';
import { catchError, from, map, Observable, of, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {

  getUserLocation(): Observable<GeolocationState> {
    return this.getBrowserLocationPermission().pipe(
      switchMap((permissionStatus: PermissionState) => {
        const isLocationAllowed = permissionStatus === 'granted';
        return this.getCurrentUserPosition(permissionStatus).pipe(
          map((userPosition: GeoLocationCoord) => ({
            location: userPosition,
            isLocationAllowed,
          })),
          catchError((error: any) =>
            of({
              location: DEFAULT_USER_GEO_POSITION_CONSTANT,
              isLocationAllowed: false,
              error: this.handleLocationError(error),
            })
          )
        );
      }),
      catchError((error: any) =>
        of({
          location: DEFAULT_USER_GEO_POSITION_CONSTANT,
          isLocationAllowed: false,
          error: this.handleLocationError(error),
        })
      )
    );
  }

  getCurrentUserPosition(permission: PermissionState): Observable<GeoLocationCoord> {
    return new Observable(observer => {
      navigator.geolocation.getCurrentPosition(
        position => {
          if (permission === BROWSER_PERMISSION_STATE.DENIED) {
            observer.next({ ...DEFAULT_USER_GEO_POSITION_CONSTANT });
          } else {
            observer.next({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }
          observer.complete();
        },
        error => {
          observer.error(this.handleLocationError(error));
        }
      );
    });
  }

  getBrowserLocationPermission(): Observable<PermissionState> {
    return from(navigator.permissions.query({ name: 'geolocation' as PermissionName })).pipe(
      map(permissionStatus => {
        if (permissionStatus.state === BROWSER_PERMISSION_STATE.PROMPT) {
          // Fallback for safari Browsers
          return BROWSER_PERMISSION_STATE.DENIED;
        } else {
          return permissionStatus.state;
        }
      }),
      catchError(error => {
        throw this.handleLocationError(error);
      })
    );
  }

  handleLocationError(error: GeolocationPositionError): string {
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
