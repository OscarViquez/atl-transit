import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StationState } from '../../models';
import { getRouterSelectors } from '@ngrx/router-store';
import { AmenityData } from '@atl-transit/stations';
import { TrainArrivalAdapter } from '../../adapters';

export const stationFeatureSelector = createFeatureSelector<StationState>('stations')

export const stationGeneralSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => stationState.allStations
);

export const stationArrivalResponseSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => TrainArrivalAdapter.MartaResponseToRailArrival(stationState.arrivalData)
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
    (stationState, arrivalData) => TrainArrivalAdapter.GeneralResponseToStationDetails(stationState.allStations, arrivalData , stationState.amenities)

)

export const { selectRouteParams } = getRouterSelectors();

export const generalStationByIdSelector = createSelector(
    stationGeneralSelector, 
    selectRouteParams,
    (allStations, {id}) => allStations.find((station) => station._station_key == id)
)

export const amenitiesSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => stationState.amenities
)

export const stationScheduleSelector = createSelector(
    stationFeatureSelector, 
    (stationState) => stationState.stationSchedule
)

export const amenitiesByIdSelector = createSelector(
    stationGeneralSelector, 
    amenitiesSelector, 
    selectRouteParams,
    (allStations, amenities, {id}) => {
        // TODO: if possible, move this to the adapter or the service file
        const amenityArray : AmenityData[] = [];
        const currentStation = allStations.find((station) => station._station_key == id);
        currentStation?.amenities.forEach((amenity) => {
            const locatedAmenity = amenities.find((item) => item._amenities_key == amenity);

            const mappedAmenity: AmenityData = {
                _id: locatedAmenity?._id || '',  
                _amenities_key: locatedAmenity?._amenities_key || 0, 
                name: locatedAmenity?.name || '',
                free: locatedAmenity?.free || false,
                schedule: locatedAmenity?.schedule || '',
                icon: locatedAmenity?.icon || ''
            };

            amenityArray.push(mappedAmenity);
        })

        return amenityArray
    }
)

export const scheduleByIdSelector = createSelector(
    stationGeneralSelector, 
    stationScheduleSelector, 
    selectRouteParams,
    (allStations, schedules, {id}) => {
        const currentStation = allStations.find((station) => station._station_key == id);
        const currentStationSchedule = schedules.find((schedule) => schedule._schedule_key == currentStation?._schedule_key)
        return currentStationSchedule;
    }
)