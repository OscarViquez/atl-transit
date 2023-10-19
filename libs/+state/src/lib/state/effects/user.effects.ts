import { Injectable } from '@angular/core';
import * as ArrivalActions from '../actions/arrivals.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, concatMap} from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { MartaArrivalResponse } from '../../models';
import { UserService } from '../../services';
import { userLocationAction, userTrainStations} from '../actions';

@Injectable({
   providedIn: 'root'
})

export class UserEffects {

    constructor(private actions$: Actions,
    private userService: UserService  ) {}

    loadUser$ = createEffect(() => 
    this.actions$.pipe(
        ofType(userLocationAction.location),
        concatMap(() => this.userService.getUserCoordinations()
        .pipe(
            map((coordinates) => userLocationAction.locateUserSuccess({ request: coordinates })),
            catchError((error) => of(userLocationAction.locateUserFailure({ message: error})))
        ))
    ))

    // loadUserTrains$ = createEffect(() => 
    // this.actions$.pipe(
    //     ofType(userLocationAction.locateUserSuccess),
    //     concatMap(() => this.userService)
    // ))

}