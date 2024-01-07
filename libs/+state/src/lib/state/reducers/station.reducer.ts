import { createReducer, on, State } from '@ngrx/store';
import { generalStationActions, arrivalMappingActions, arrivalResponseActions, amenitiesActions, stationScheduleActions } from '../actions/stations.action';
import { StationState  } from '../../models';
import { Action } from 'rxjs/internal/scheduler/Action';


export const initalArrivalState: StationState = {
    jsonStations: [], 
    arrivalData: [], 
    railArrivalData: [], 
    loading: true, 
    amenities: [], 
    stationSchedule: [],
    error: ''
}

export const stationReducer = createReducer(
    initalArrivalState, 
    on(generalStationActions.generalStationSuccess, (state, action) => ({
        ...state, 
        jsonStations: action.generalStations,
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
        error: action.message
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
)
