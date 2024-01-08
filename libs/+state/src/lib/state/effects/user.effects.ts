import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { StationState, UserLocationInfo, UserState } from '../../models';
import { UserService } from '../../services/user-location/user.service';
import { arrivalMappingActions, userLocationAction, userTrainStations } from '../actions';
import { stationRailArrivalSelector, userSelector } from '../selectors';
import { CombinedDataAdapter } from '../../adapters/index';

@Injectable({
   providedIn: 'root'
})
export class UserEffects {
   loadUser$ = createEffect(() =>
      this.actions$.pipe(
         ofType(userLocationAction.location),
         concatMap(() =>
            this.userService.getUserCoordinations().pipe(
               map((coordinates) =>
                  userLocationAction.locateUserSuccess({ request: coordinates as UserLocationInfo })
               ),
               catchError((error) => {
                  return of(userLocationAction.locateUserFailure({ message: error }));
               })
            )
         )
      )
   );

   // TODO: DELETE this after refactoring or reorganizing adapters. Adapter method should be used in selectors
   loadMappedData$ = createEffect(() =>
      this.actions$.pipe(
         ofType(arrivalMappingActions.arrivalMappingSuccess),
         withLatestFrom(
            this.userStore.select(userSelector),
            this.stationStore.select(stationRailArrivalSelector)
         ),
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         concatMap(([action, user, railArrivalData]) =>
            CombinedDataAdapter.MapUserDataToFullUi(user, railArrivalData).pipe(
               map((mappedUserTrains) =>
                  userTrainStations.userStationMappingSuccess({ stations: mappedUserTrains })
               ),
               catchError((error) =>
                  of(userTrainStations.userStationMappingFailure({ message: error }))
               )
            )
         )
      )
   );

   constructor(
      private actions$: Actions,
      private userService: UserService,
      private userStore: Store<UserState>,
      private stationStore: Store<StationState>
   ) {}
}
