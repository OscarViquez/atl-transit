import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, concatMap } from 'rxjs/operators';
import { UserService } from '../../services';
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
                  userLocationAction.locateUserSuccess({ request: coordinates })
               ),
               catchError((error) =>
                  of(userLocationAction.locateUserFailure({ message: error }))
               )
            )
         )
      )
   );

   // loadUserTrains$ = createEffect(() =>
   // this.actions$.pipe(
   //     ofType(userLocationAction.locateUserSuccess),
   //     concatMap(() => this.userService)
   // ))

   constructor(private actions$: Actions, 
    private userService: UserService) {}
}
