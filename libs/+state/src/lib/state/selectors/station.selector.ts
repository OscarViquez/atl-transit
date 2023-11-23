import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StationStateInterface } from '../../models';
import { CombinedDataAdapter } from '../../adapters/index';
import { getRouterSelectors } from '@ngrx/router-store';
import { AmenitiesStationInterface } from '@atl-transit/stations';

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

export const { selectRouteParams } = getRouterSelectors();

export const generalStationByIdSelector = createSelector(
    stationGeneralSelector, 
    selectRouteParams,
    (jsonStations, {id}) => jsonStations.find((station) => station._station_key == id)
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
    (jsonStations, amenities, {id}) => {
        let amenityArray : AmenitiesStationInterface[] = [];
        const currentStation = jsonStations.find((station) => station._station_key == id);
        currentStation?.amenities.forEach((amenity) => {
            const locatedAmenity = amenities.find((item) => item._amenities_key == amenity);

            const mappedAmenity: AmenitiesStationInterface = {
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