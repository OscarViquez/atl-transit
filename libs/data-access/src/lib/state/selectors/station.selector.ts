import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StationState } from '../../models';
import { getRouterSelectors } from '@ngrx/router-store';
import { getAllArrivalStationItems, getAllStationDetails } from '../../adapters';

export const stationFeatureSelector = createFeatureSelector<StationState>('stations');

export const stationGeneralSelector = createSelector(
   stationFeatureSelector,
   (stationState) => stationState.allStations
);

export const stationArrivalResponseSelector = createSelector(
   stationFeatureSelector,
   (stationState) => getAllArrivalStationItems(stationState.arrivalData)
);

export const stationLoadingSelector = createSelector(
   stationFeatureSelector,
   (stationState) => stationState.loading
);

export const stationErrorSelector = createSelector(
   stationFeatureSelector,
   (stationState) => stationState.error
);

export const stationDetailsSelector = createSelector(
   stationFeatureSelector,
   stationArrivalResponseSelector,
   (stationState, arrivalData) =>
         getAllStationDetails(
         stationState.allStations,
         arrivalData,
         stationState.amenities
      )
);

export const { selectRouteParams } = getRouterSelectors();

export const stationDetailsByIdSelector = createSelector(
   stationDetailsSelector,
   selectRouteParams,
   (allStations, { id }) => allStations.find((station) => station.stationKey == id)
);

export const selectRouteKey = createSelector(
   selectRouteParams,
   ({ id }) => id
)
export const amenitiesSelector = createSelector(
   stationFeatureSelector,
   (stationState) => stationState.amenities
);

export const stationScheduleSelector = createSelector(
   stationFeatureSelector,
   (stationState) => stationState.stationSchedule
);
