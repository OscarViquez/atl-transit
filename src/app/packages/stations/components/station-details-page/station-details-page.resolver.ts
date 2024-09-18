import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { FacadeService } from '@atl-transit/data-access';

@Injectable({
  providedIn: 'root',
})
export class StationDetailsResolver implements Resolve<void> {
  constructor(private facade: FacadeService) {}

  resolve(route: ActivatedRouteSnapshot): void {
    const stationName = route.paramMap.get('stationName');
    return this.facade.fetchStationDetails(stationName as string);
  }
}
