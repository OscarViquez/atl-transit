import { Injectable } from '@angular/core';
import { GeolocationService } from '../../services/geolocation/geolocation.service';
import { Observable, Subject } from 'rxjs';
import { GeoLocationCoord } from '../../models/api.interfaces';
import { GeolocationState } from '../../models/state.interfaces';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService {
  isLocationAllowedSubject = new Subject<boolean>();
  userGeolocationSubject = new Subject<GeoLocationCoord>();
  geoLocationStateSubject = new Subject<GeolocationState>();

  constructor(private service: GeolocationService) {}

  updateGeolocationPreference(): void {
    this.service.getUserLocation().then((locationInfo: GeolocationState) => {
      this.geoLocationStateSubject.next(locationInfo);
    });
  }
}
