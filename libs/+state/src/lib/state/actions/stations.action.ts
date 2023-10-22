/* eslint-disable @nx/enforce-module-boundaries */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { StationInterface, RailArrival, JsonStationInterface } from 'stations-ui';
import { MartaArrivalResponse } from '../../models';
import { StationActionTypes } from '../../types';

export const generalStationActions = createActionGroup({
   source: StationActionTypes.GeneralInformationType,
   events: {
      [StationActionTypes.GeneralInformationLocate]: emptyProps(),
      [StationActionTypes.GeneralInformationSuccess]: props<{
         generalStations: JsonStationInterface[];
      }>(),
      [StationActionTypes.GeneralInformationFailure]: props<{ message: string }>()
   }
});

export const arrivalResponseActions = createActionGroup({
   source: StationActionTypes.ArrivalResponseType,
   events: {
      [StationActionTypes.ArrivalResponseSuccess]: props<{
         arrivalResponse: MartaArrivalResponse[];
      }>(),
      [StationActionTypes.ArrivalResponseFailure]: props<{ message: string }>()
   }
});

export const arrivalMappingActions = createActionGroup({
   source: StationActionTypes.ArrivalMappingType,
   events: {
      [StationActionTypes.ArrivalMappingSuccess]: props<{
         arrivalsMapped: StationInterface[];
      }>(),
      [StationActionTypes.ArrivalMappingFailure]: props<{ message: string }>()
   }
});