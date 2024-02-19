import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { Store } from '@ngrx/store';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { DataService } from '../../services/data/data.service';
import { selectRouteKey } from '../selectors';
import {
   amenitiesActions,
   arrivalResponseActions,
   generalStationActions,
   stationScheduleActions,
   userLocationAction
} from '../actions';
// TODO: Delete this after refactoring or reorganizing adapters. Adapter method should be used in selectors

@Injectable({
   providedIn: 'root'
})
export class StationEffects {
   loadGeneralStations$ = createEffect(() =>
      this.actions$.pipe(
         ofType(userLocationAction.locateUserSuccess),
         concatMap(() =>
            this.dataService.getStationData().pipe(
               map((stationData) =>
                  generalStationActions.generalStationSuccess({ generalStations: stationData })
               ),
               catchError((error) =>
                  of(generalStationActions.generalStationFailure({ message: error }))
               )
            )
         )
      )
   );

   loadArrivalData$ = createEffect(() =>
      this.actions$.pipe(
         ofType(generalStationActions.generalStationSuccess),
         concatMap(() =>
            this.dataService.getArrivalTimes().pipe(
               map((arrivalData) =>
                  arrivalResponseActions.arrivalResponseSuccess({ arrivalResponse: arrivalData })
               ),
               catchError((error) =>
                  of(arrivalResponseActions.arrivalResponseFailure({ message: error }))
               )
            )
         )
      )
   );

   loadAmenities$ = createEffect(() =>
      this.actions$.pipe(
         ofType(generalStationActions.generalStationSuccess),
         concatMap(() =>
            this.dataService.getAmenitiesData().pipe(
               map((amenitiesData) =>
                  amenitiesActions.amenitiesResponseSuccess({ amenities: amenitiesData })
               ),
               catchError((error) =>
                  of(amenitiesActions.amenitiesResponseFailure({ message: error }))
               )
            )
         )
      )
   );

   loadStationSchedule$ = createEffect(() =>
      this.actions$.pipe(
         ofType(generalStationActions.generalStationSuccess),
         withLatestFrom(this.store.select(selectRouteKey)),
         concatMap(([action, routeParams]) => 
            this.dataService.getStationSchedule(routeParams.id).pipe(
               map((scheduleData) =>
                  stationScheduleActions.stationScheduleResponseSuccess({
                     stationSchedule: scheduleData
                  })
               ),
               catchError((error) =>
                  of(stationScheduleActions.stationScheduleResponseFailure({ message: error }))
               )
            )
         )
      )
   );


   constructor(
      private actions$: Actions,
      private dataService: DataService,
      private store: Store
   ) {}
}
