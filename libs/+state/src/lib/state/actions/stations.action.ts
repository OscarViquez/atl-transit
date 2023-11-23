/* eslint-disable @nx/enforce-module-boundaries */
import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { StationInterface, JsonStationInterface, AmenitiesStationInterface, ScheduleStationInterface } from '@atl-transit/stations';
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

export const amenitiesActions = createActionGroup({
   source: StationActionTypes.AmenitesResponseType,
   events: {
      [StationActionTypes.AmenitesResponseSuccess]: props<{
         generalStations: AmenitiesStationInterface[];
      }>(),
      [StationActionTypes.AmenitesResponseFailure]: props<{ message: string }>()
   }
});

export const stationScheduleActions = createActionGroup({
   source: StationActionTypes.StationScheduleResponseType,
   events: {
      [StationActionTypes.StationScheduleResponseSuccess]: props<{
         generalStations: ScheduleStationInterface[];
      }>(),
      [StationActionTypes.StationScheduleResponseFailure]: props<{ message: string }>()
   }
});