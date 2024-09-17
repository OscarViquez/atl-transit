import { DestroyRef, Injectable, OnDestroy } from '@angular/core';
import { GeolocationService } from '../../services/geolocation/geolocation.service';
import { Observable, Subject } from 'rxjs';
import { GeoLocationCoord } from '../../models/api.interfaces';
import { GeolocationState } from '../../models/state.interfaces';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UserStoreService implements OnDestroy {
  isLocationAllowedSubject = new Subject<boolean>();
  userGeolocationSubject = new Subject<GeoLocationCoord>();
  geoLocationStateSubject = new Subject<GeolocationState>();

  constructor(
    private service: GeolocationService,
    private destroyRef: DestroyRef
  ) {}

  updateGeolocationPreference(): void {
    this.service
      .getUserLocation()
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: userLocation => {
          this.userGeolocationSubject.next(userLocation.location);
          this.geoLocationStateSubject.next(userLocation);
        },
      });
  }

  ngOnDestroy(): void {
    this.isLocationAllowedSubject.complete();
    this.userGeolocationSubject.complete();
    this.geoLocationStateSubject.complete();
  }
}
