import { Injectable } from '@angular/core';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Coordinates } from '../../models';
import { UserService } from '../../services/user-location/user.service';
import { userLocationAction } from '../actions';

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
      private userService: UserService
   ) {}
}
