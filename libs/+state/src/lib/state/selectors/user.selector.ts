import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from '../../models';
import { TrainArrivalAdapter, TrainUiAdapter, UserAdapter } from '../../adapters';
import { stationDetailsSelector, stationFeatureSelector } from './station.selector';

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
   stationDetailsSelector,
   (userState, stationDetails) => UserAdapter.MapClosestStationToUser(userState.user, stationDetails)
);

export const userLoadingSelector = createSelector(
   userFeatureSelector, 
   (userState) => userState.loading
);

//UI 
export const userTrainUiSelector = createSelector(
   userStationsSelector,
   (stationDetails) => TrainUiAdapter.MapStationsToUi(stationDetails)
)
