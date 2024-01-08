import { createReducer, on } from '@ngrx/store';
import {
   generalStationActions,
   arrivalMappingActions,
   arrivalResponseActions,
   amenitiesActions,
   stationScheduleActions
} from '../actions';
import { StationState } from '../../models';

export const initalArrivalState: StationState = {
   jsonStations: [],
   arrivalData: [],
   railArrivalData: [],
   // TODO:
   // * Either we sperate the loading state into a seperate reducer,
   // * or we just use the loading state from the user reducer.
   // * So we can load all data that doesnt require user location first
   loading: true,
   amenities: [],
   stationSchedule: [],
   error: ''
};

export const stationReducer = createReducer(
   initalArrivalState,
   on(generalStationActions.generalStationSuccess, (state, action) => ({
      ...state,
      jsonStations: action.generalStations
   })),
   on(generalStationActions.generalStationFailure, (state, action) => ({
      ...state,
      error: action.message
   })),
   on(arrivalResponseActions.arrivalResponseSuccess, (state, action) => ({
      ...state,
      arrivalData: action.arrivalResponse,
      loading: false
   })),
   on(arrivalResponseActions.arrivalResponseFailure, (state, action) => ({
      ...state,
      error: action.message,
      loading: false
   })),
   on(arrivalMappingActions.arrivalMappingSuccess, (state, action) => ({
      ...state,
      railArrivalData: action.arrivalsMapped
   })),
   on(arrivalMappingActions.arrivalMappingFailure, (state, action) => ({
      ...state,
      error: action.message
   })),
   on(amenitiesActions.amenitiesResponseSuccess, (state, action) => ({
      ...state,
      amenities: action.amenities
   })),
   on(amenitiesActions.amenitiesResponseFailure, (state, action) => ({
      ...state,
      error: action.message
   })),
   on(stationScheduleActions.stationScheduleResponseSuccess, (state, action) => ({
      ...state,
      stationSchedule: action.stationSchedule
   })),
   on(stationScheduleActions.stationScheduleResponseFailure, (state, action) => ({
      ...state,
      error: action.message
   }))
);
