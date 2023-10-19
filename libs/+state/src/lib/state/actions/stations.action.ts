import { createActionGroup, props } from '@ngrx/store';
import { TrainStaion, StationInterface, RailArrival } from "stations-ui";
import { MartaArrivalResponse } from '../../models';
import { ActionTypes, StationActionTypes } from '../../types';

export const generalStationActions = createActionGroup({
    source: StationActionTypes.GeneralInformationType,
    events: {
        [StationActionTypes.GeneralInformationSuccess] : props<{ generalStations: StationInterface[] }>(),
        [StationActionTypes.GeneralInformationFailure] : props<{ message: string}>()
    }
})

export const arrivalResponseActions = createActionGroup({
    source: StationActionTypes.ArrivalResponseType, 
    events: {
        [StationActionTypes.ArrivalResponseSuccess] : props<{ arrivalResponse : MartaArrivalResponse[] }>(), 
        [StationActionTypes.ArrivalResponseFailure] : props<{ message: string }>()
    }
})

export const arrivalMappingActions = createActionGroup({
    source: StationActionTypes.ArrivalMappingType, 
    events: {
        [StationActionTypes.ArrivalMappingSuccess] : props<{ arrivalsMapped : RailArrival[] }>(),
        [StationActionTypes.ArrivalMappingFailure] : props<{ message: string }>()
    }
})