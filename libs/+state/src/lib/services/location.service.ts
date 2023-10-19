import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { User } from '../models';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


   getUserCoordinations(): Observable<any>{
    return new Observable((observer: Observer<any>) => {
      if('geolocation' in navigator)
    {
       navigator.geolocation.getCurrentPosition((pos) => {

        const userLocation: User = {
          longitude: pos.coords.latitude,
          latitude: pos.coords.longitude
        }

        return observer.next(userLocation)

      }, (error) => {
        let errorMessage = ''
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = 'User denied the request for geolocation'
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = 'Location information is unavailable.'
            break;
          case error.TIMEOUT:
            errorMessage = 'Location information is unavailable.'
            break;
          default:
            errorMessage = 'Location information is unavailable.'
        }

        return observer.next(errorMessage)
      })
   }
  })
}




  
 
}
