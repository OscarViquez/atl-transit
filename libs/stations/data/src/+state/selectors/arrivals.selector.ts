import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MartaArrivalWithLoaded } from '../../interfaces';

export const selectArrivalState =
   createFeatureSelector<MartaArrivalWithLoaded>('arrivals');
export const selectArrivalsResponse = createSelector(
   selectArrivalState,
   (state) => state.arrivals
);
export const selectArrivalsIsLoading = createSelector(
   selectArrivalState,
   (state) => state.isLoaded
);
