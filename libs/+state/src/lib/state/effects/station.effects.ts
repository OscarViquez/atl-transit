import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, concatMap, withLatestFrom} from 'rxjs/operators';
import { StationStateInterface, UserStateInterface } from '../../models';
import { DataService } from '../../services/data.service';
import { arrivalMappingActions, arrivalResponseActions, generalStationActions, userLocationAction } from '../actions';
import { stationArrivalResponseSelector, stationGeneralSelector } from '../selectors';

@Injectable({
   providedIn: 'root'
})

export class StationEffects {


    loadGeneralStations$ = createEffect(() => 
    this.actions$.pipe(
        ofType(userLocationAction.locateUserSuccess),
        concatMap(() => this.dataService.getStationData().pipe(
            map((stationData) => generalStationActions.generalStationSuccess({generalStations: stationData})),
            catchError((error) => of(generalStationActions.generalStationFailure({ message: error })))
        ))
    ))

    loadArrivalData$ = createEffect(() => 
    this.actions$.pipe(
        ofType(generalStationActions.generalStationSuccess),
        concatMap(() => this.dataService.getArrivalTimes().pipe(
            map((arrivalData) => arrivalResponseActions.arrivalResponseSuccess({ arrivalResponse: arrivalData})), 
            catchError((error) => of(arrivalResponseActions.arrivalResponseFailure({ message: error })))
        ))
    ))

    constructor(private actions$: Actions, 
        private dataService: DataService, 
        private stationStore: Store<StationStateInterface>) {}

}