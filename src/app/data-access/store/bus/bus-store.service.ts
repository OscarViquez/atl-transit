import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { ApiService } from '../../services';
import { GtfsRealtimeBusResponse, MartaBusFeedResponse } from '../../models';

export interface BusFeatureState {
  martaBusFeedResponse?: MartaBusFeedResponse;
  martaGtfsFeedResponse?: GtfsRealtimeBusResponse;
  allBusRoutes?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class BusStoreService {
  private initialState: BusFeatureState = {
    martaBusFeedResponse: undefined,
    martaGtfsFeedResponse: undefined,
    allBusRoutes: undefined,
  };

  private stateSubject: BehaviorSubject<BusFeatureState> = new BehaviorSubject(this.initialState);

  constructor(private api: ApiService) {}

  private setState(newState: BusFeatureState): void {
    this.stateSubject.next(newState);
  }

  private getState(): BusFeatureState {
    return this.stateSubject.getValue();
  }

  private fetchAndSetGtfsFeedResponse(): Observable<GtfsRealtimeBusResponse> {
    return this.api.getBusGtfsFeed().pipe(
      tap(data => {
        const currentState = this.getState();
        this.setState({ ...currentState, martaGtfsFeedResponse: data });
      })
    );
  }

  initializeFeatureState(): Observable<BusFeatureState> {
    return this.fetchAndSetGtfsFeedResponse().pipe(
      map(gtfsFeed => {
        const currentState = this.getState();
        const newState = { ...currentState, martaGtfsFeedResponse: gtfsFeed };
        this.setState(newState);
        return newState;
      })
    );
  }
}
