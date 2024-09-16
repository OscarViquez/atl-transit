import { Injectable } from '@angular/core';
import { BROWSER_AGENT, BROWSER_PERMISSION_STATE } from '../../constants/browser-api.constants';
import { GeolocationState } from '../../models/state.interfaces';
import { DEFAULT_USER_GEO_POSITION_CONSTANT } from '../../constants/geolocation.constants';
import { GeoLocationCoord } from '../../models/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class GeolocationService {
  async getUserLocation(): Promise<GeolocationState> {
    try {
      const permissionStatus = await this.getBrowserLocationPermission();
      const isLocationAllowed = (await this.getBrowserLocationPermission()) === 'granted';
      const userPosition = await this.getCurrentUserPosition(permissionStatus);
      return { location: userPosition, isLocationAllowed };
    } catch (error) {
      return {
        location: DEFAULT_USER_GEO_POSITION_CONSTANT,
        isLocationAllowed: false,
        error: 'Error getting user location. We have set your location to the default.',
      };
    }
  }

  getCurrentUserPosition(permission: PermissionState): Promise<GeoLocationCoord> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        position => {
          if (permission === BROWSER_PERMISSION_STATE.DENIED) {
            resolve({ ...DEFAULT_USER_GEO_POSITION_CONSTANT });
          } else {
            resolve({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          }
        },
        error => reject(this.handleLocationError(error))
      );
    });
  }

  getBrowserLocationPermission(): Promise<PermissionState> {
    return new Promise((resolve, reject) => {
      navigator.permissions
        .query({ name: 'geolocation' as PermissionName })
        .then(permissionStatus => {
          if (permissionStatus.state === BROWSER_PERMISSION_STATE.PROMPT) {
            // Fallback for safari Browsers
            resolve(BROWSER_PERMISSION_STATE.DENIED);
          } else {
            resolve(permissionStatus.state);
          }
        })
        .catch(error => {
          reject(this.handleLocationError(error));
        });
    });
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
