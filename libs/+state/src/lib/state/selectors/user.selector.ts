import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserStateInterface } from '../../models';

export const userFeatureSelector = createFeatureSelector<UserStateInterface>('user');

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
   (userState) => userState.trainStations
);

export const userLoadingSelector = createSelector(
   userFeatureSelector, 
   (userState) => userState.loading
)