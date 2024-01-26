import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { Coordinates, StationState, UserState } from '../../models';
import { UserService } from '../../services/user-location/user.service';
import { userLocationAction, userTrainStations } from '../actions';
import { userSelector } from '../selectors';

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
                  userLocationAction.locateUserSuccess({ request: coordinates as Coordinates })
               ),
               catchError((error) => {
                  return of(userLocationAction.locateUserFailure({ message: error }));
               })
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
