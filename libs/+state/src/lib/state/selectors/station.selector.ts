import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StationStateInterface } from '../../models';

export const stationFeatureSelector = createFeatureSelector<StationStateInterface>('stations')

export const stationGeneralSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => stationState.jsonStations
);

export const stationArrivalResponseSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => stationState.arrivalData
);

export const stationLoadingSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => stationState.loading
);

export const stationRailArrivalSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => stationState.railArrivalData
);

export const stationErrorSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => stationState.jsonStations
);

