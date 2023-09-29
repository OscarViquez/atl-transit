import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppStateInterface, UserStateInterface } from '../../models';

export const userFeatureSelector = createFeatureSelector<AppStateInterface, UserStateInterface>('user');

export const locationFoundSelector = createSelector(
   userFeatureSelector,
   (userState: UserStateInterface) => userState.locationFound
);
