import { createReducer, on, Action } from '@ngrx/store';
import { generalStationActions, arrivalMappingActions, arrivalResponseActions } from '../actions/stations.action';
import { StationStateInterface  } from '../../models';


export const initalArrivalState: StationStateInterface = {
    jsonStations: [], 
    arrivalData: [], 
    railArrivalData: [], 
    loading: true, 
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
    }))
)
