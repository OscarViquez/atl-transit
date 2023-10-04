import { Injectable } from '@angular/core';
import * as ArrivalActions from '../actions/arrivals.action';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { MartaArrivalResponse } from '../../models';
@Injectable({
   providedIn: 'root'
})
export class ArrivalsEffects {
   constructor(
      private readonly action$: Actions,
      private readonly dataService: DataService,
   ) {}

   loadTrainArrival$ = createEffect(() =>
      this.action$.pipe(
         ofType(ArrivalActions.loadRailArrival),
         switchMap(() =>
            this.dataService.getArrivalTimes().pipe(
               map((data) =>
                  ArrivalActions.loadRailArrivalSuccess({
                     request: data as MartaArrivalResponse[]
                  })
               ),
               catchError((error) =>
                  of(
                     ArrivalActions.loadRailArrivalFailure({
                        request: error as MartaArrivalResponse[]
                     })
                  )
               )
            )
         )
      )
   );

   // * DO NOT USE: THIS IS JUST AN EXAMPLE
   // * SIMPLE, BETTER EXAMPLE OF A NGRX EFFECT
   getArrivalData$ = createEffect(() =>
      this.action$.pipe(
         ofType(ArrivalActions.loadRailArrival),
         switchMap(() => this.dataService.getArrivalTimes()),
         map((data) =>
            ArrivalActions.loadRailArrivalSuccess({
               request: data as MartaArrivalResponse[]
            })
         ),
         catchError((error) =>
            of(
               ArrivalActions.loadRailArrivalFailure({
                  request: error as MartaArrivalResponse[]
               })
            )
         )
      )
   );
}
