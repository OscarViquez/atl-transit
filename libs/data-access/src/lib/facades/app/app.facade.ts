import { Injectable } from '@angular/core';
import {
   amenitiesSelector,
   generalStationActions,
   stationDetailsByIdSelector,
   stationGeneralSelector,
   stationLoadingSelector,
   userLoadingSelector,
   userLocationAction,
   userTrainUiSelector
} from '../../state';
import { StationState, UserState } from '../../models';
import { Store, select } from '@ngrx/store';
@Injectable({
   providedIn: 'root'
})
export class AppFacadeService {
   allStationArrivals$ = this.store.pipe(select(userTrainUiSelector));
   allAmenitiesData$ = this.store.pipe(select(amenitiesSelector));
   selectedStationDetails$ = this.store.pipe(select(stationDetailsByIdSelector));
   userLoading$ = this.store.pipe(select(userLoadingSelector));
   stationDataLoading$ = this.store.pipe(select(stationLoadingSelector));
   allGeneralStations$ = this.store.pipe(select(stationGeneralSelector));

   constructor(
      private readonly store: Store,
      private user: Store<UserState>,
      private station: Store<StationState>
   ) {}

   // * When initializing the app, we need to dispatch actions to load the data
   dispatchAppData(): void {
      // * This helps Locates User based on the user's location
      this.user.dispatch(userLocationAction.location());
   }

   // * When visiting the Train Page, we need to dispatch actions to load the data
   dispatchStationsFeature(): void {
      // * This helps Locates stations based on the user's location
      this.station.dispatch(generalStationActions.stationLocate());
   }

   // * When visiting the Bus Page, we need to dispatch actions to load the data
   dispatchBusFeature(): void {
      // * This helps Locates buses
   }

   dispatchTrainMap(): void {
      // * Methods associated with Map Feature goes here
   }

   dispatchSearchModal(): void {
      // * This helps Locates stations based on the user's location
      this.station.dispatch(generalStationActions.stationLocate());
   }
}
