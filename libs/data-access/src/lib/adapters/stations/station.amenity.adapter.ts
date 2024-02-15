/* eslint-disable @nx/enforce-module-boundaries */
import { AmenityData } from '@atl-transit/stations';

export const getStationAmenities = (
   amentiyKeys: number[],
   allAmenities: AmenityData[]
): AmenityData[] => {
   const stationAmenities: AmenityData[] = [];

   amentiyKeys.forEach((key) => {
      allAmenities.forEach((item) => {
         if (key === item._amenities_key) {
            stationAmenities.push(item);
         }
      });
   });
   return stationAmenities;
};
