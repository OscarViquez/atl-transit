import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Coordinates } from '../../models';

@Injectable({
   providedIn: 'root'
})
export class UserService {
   getUserCoordinations(): Observable<Coordinates | string> {
      return new Observable((observer: Observer<Coordinates | string>) => {
         if ('geolocation' in navigator) {
            navigator.geolocation.getCurrentPosition(
               (pos) => {
                  const userLocation: Coordinates = {
                     longitude: pos.coords.longitude,
                     latitude: pos.coords.latitude
                  };

                  observer.next(userLocation);
               },
               (error) => {
                  let errorMessage = '';
                  switch (error.code) {
                     case error.PERMISSION_DENIED:
                        errorMessage = 'User denied the request for geolocation';
                        break;
                     case error.POSITION_UNAVAILABLE:
                        errorMessage = 'Location information is unavailable.';
                        break;
                     case error.TIMEOUT:
                        errorMessage = 'The request to get user location timed out.';
                        break;
                     default:
                        errorMessage = 'An unknown error occurred.';
                  }
                  // TODO: Improve Error Handling
                  return observer.next(errorMessage);
               }
            );
         } else {
            observer.error('Geolocation is not supported by this browser.');
         }
      });
   }
}
