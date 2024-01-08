import { createAction, createActionGroup, emptyProps, props  } from '@ngrx/store';
import { StationDetails, GeneralStationResponse, AmenityDetails, StationSchedule } from '@atl-transit/stations';
import { ArrivalActionTypes, StationActionTypes} from '../../types';
import { MartaArrivalResponse } from '../../models';

export const loadRailArrival = createAction(ArrivalActionTypes.GET_RAIL_ARRIVALS);

export const loadRailArrivalSuccess = createAction(
    ArrivalActionTypes.GET_RAIL_ARRIVALS_SUCCESS,
   props<{ request: MartaArrivalResponse[] }>()
);

export const loadRailArrivalFailure = createAction(
    ArrivalActionTypes.GET_RAIL_ARRIVALS_FAILURE,
   props<{ request: MartaArrivalResponse[] }>()
);

export const generalStationActions = createActionGroup({
    source: StationActionTypes.GeneralInformationType,
    events: {
       [StationActionTypes.GeneralInformationLocate]: emptyProps(),
       [StationActionTypes.GeneralInformationSuccess]: props<{
          generalStations: GeneralStationResponse[];
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
          arrivalsMapped: StationDetails[];
       }>(),
       [StationActionTypes.ArrivalMappingFailure]: props<{ message: string }>()
    }
 });
 
 export const amenitiesActions = createActionGroup({
    source: StationActionTypes.AmenitesResponseType,
    events: {
       [StationActionTypes.AmenitesResponseSuccess]: props<{
          amenities: AmenityDetails[];
       }>(),
       [StationActionTypes.AmenitesResponseFailure]: props<{ message: string }>()
    }
 });
 
 export const stationScheduleActions = createActionGroup({
    source: StationActionTypes.StationScheduleResponseType,
    events: {
       [StationActionTypes.StationScheduleResponseSuccess]: props<{
          stationSchedule: StationSchedule[];
       }>(),
       [StationActionTypes.StationScheduleResponseFailure]: props<{ message: string }>()
    }
 });