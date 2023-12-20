import { Injectable } from '@angular/core';
import {
   generalStationActions,
   userLoadingSelector,
   userLocationAction,
   userStationsSelector
} from '../../state';
import { StationStateInterface, UserStateInterface } from '../../models';
import { Store } from '@ngrx/store';
@Injectable({
   providedIn: 'root'
})
export class AppFacadeService {
   constructor(
      private user: Store<UserStateInterface>,
      private station: Store<StationStateInterface>
   ) {}

   locateStation() {
      this.station.dispatch(generalStationActions.stationLocate());
   }

   locateUser() {
      this.user.dispatch(userLocationAction.location());
   }

   selectTrainData() {
      return this.user.select(userStationsSelector);
   }

   selectPageLoaded() {
      return this.user.select(userLoadingSelector);
   }
}
