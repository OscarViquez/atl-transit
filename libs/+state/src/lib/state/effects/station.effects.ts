import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, concatMap, withLatestFrom } from 'rxjs/operators';
import { StationState } from '../../models';
import { CombinedDataAdapter } from '../../adapters/index';
import { DataService } from '../../services/data/data.service';
import {
   amenitiesActions,
   arrivalMappingActions,
   arrivalResponseActions,
   generalStationActions,
   stationScheduleActions,
   userLocationAction
} from '../actions';
// TODO: Delete this after refactoring or reorganizing adapters. Adapter method should be used in selectors
import { stationArrivalResponseSelector, stationGeneralSelector } from '../selectors';

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
         concatMap(() =>
            this.dataService.getStationSchedule().pipe(
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

   // TODO: removing this after refactoring or reorganizing adapters. Adapter method should be used in selectors
   loadMappedData$ = createEffect(() =>
      this.actions$.pipe(
         ofType(arrivalResponseActions.arrivalResponseSuccess),
         withLatestFrom(
            this.stationStore.select(stationGeneralSelector),
            this.stationStore.select(stationArrivalResponseSelector)
         ),
         // eslint-disable-next-line @typescript-eslint/no-unused-vars
         concatMap(([action, jsonStations, arrivalData]) =>
            CombinedDataAdapter.MapCombinedStationArrivalData(jsonStations, arrivalData).pipe(
               map((mappedStationRailData) =>
                  arrivalMappingActions.arrivalMappingSuccess({
                     arrivalsMapped: mappedStationRailData
                  })
               ),
               catchError((error) =>
                  of(arrivalMappingActions.arrivalMappingFailure({ message: error }))
               )
            )
         )
      )
   );

   constructor(
      private actions$: Actions,
      private dataService: DataService,
      private stationStore: Store<StationState>
   ) {}
}
