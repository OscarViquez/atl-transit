import { Observable } from 'rxjs';

export function checkPermissionStatus(): Observable<PermissionState> {
  return new Observable(observer => {
    navigator.permissions.query({ name: 'geolocation' }).then(result => {
      observer.next(result.state);
      result.onchange = () => observer.next(result.state);
    });
  });
}
