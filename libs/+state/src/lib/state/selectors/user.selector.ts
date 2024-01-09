import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../models';
import { UserAdapter } from '../../adapters';
import { stationFeatureSelector } from './station.selector';

export const userFeatureSelector = createFeatureSelector<UserState>('user');

export const userLocationFoundSelector = createSelector(
   userFeatureSelector,
   (userState) => userState.locationFound
);

export const userSelector = createSelector(
   userFeatureSelector, 
   (userState) => userState.user
);

export const userErrorSelector = createSelector(
   userFeatureSelector, 
   (userState) => userState.error
); 

export const userStationsSelector = createSelector(
   userFeatureSelector, 
   stationFeatureSelector,
   (userState, stationState) => UserAdapter.MapClosestStationToUser(userState.user, stationState.allStations)
);

export const userS = createSelector(
   userFeatureSelector, 
   stationFeatureSelector,
   (userState, stationState) => UserAdapter.MapClosestStationToUser(userState.user, stationState.allStations)
);

export const userLoadingSelector = createSelector(
   userFeatureSelector, 
   (userState) => userState.loading
)