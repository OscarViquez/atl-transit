/* eslint-disable @nx/enforce-module-boundaries */
import {
   TrainArrival,
   GeneralStationResponse,
   RailDirection,
   BusRoutes,
   StationDetails,
   AmenityData,
   StationInformation
} from '@atl-transit/features/stations';
import { GenericItem, MartaArrivalResponse } from '../../models';
import { UiAdapter } from '../shared';

export class StationAdapter {
   static MartaResponseToTrainArrival(arrivalResponse: MartaArrivalResponse[]): TrainArrival[] {
      const mappedTrainArrivals: TrainArrival[] = [];

      arrivalResponse.forEach((item) => {
         let direction: RailDirection = 'North';

         switch (item.DIRECTION) {
            case 'N':
               direction = 'North';
               break;
            case 'S':
               direction = 'South';
               break;
            case 'W':
               direction = 'West';
               break;
            case 'E':
               direction = 'East';
               break;
         }
         let arrivalData = {
            station: item.STATION,
            direction: direction,
            destination: item.DESTINATION,
            description: direction + 'bound',
            color: item.LINE.toLowerCase(),
            secondsToArrive: item.WAITING_SECONDS,
            arrivalTime: item.WAITING_TIME
         };

         mappedTrainArrivals.push(arrivalData);
      });

      return mappedTrainArrivals;
   }

   static GeneralResponseToStationDetails(
      allStations: GeneralStationResponse[],
      arrivals: TrainArrival[],
      amenities: AmenityData[]
   ): StationDetails[] {
      return allStations.map((station) => {
         let routes: BusRoutes[] = [];
         let stationData = this.MapStationInformation(
            parseFloat(station.latitude),
            parseFloat(station.latitude),
            station.contactnumber
         );
         let stationAmenities = this.MapStationAmenities(station.amenities, amenities);

         let stationDetails = {
            stationKey: station._station_key,
            header: UiAdapter.TextToGenericHeader(station.name, station.description),
            supplementaryInformation: stationData,
            connectingBusRoutes: routes,
            amenities: stationAmenities,
            allArrivals: []
         };

         let stationToReturn = this.MapTrainArrivalGroups(arrivals, stationDetails);

         return stationToReturn;
      });
   }

   static MapStationAmenities(amentiyKeys: number[], allAmenities: AmenityData[]): AmenityData[] {
      let stationAmenities: AmenityData[] = [];

      amentiyKeys.forEach((key) => {
         allAmenities.forEach((item) => {
            if (key === item._amenities_key) {
               stationAmenities.push(item);
            }
         });
      });
      return stationAmenities;
   }

   static MapStationInformation(lat: number, long: number, phone: string): StationInformation {
      return {
         latitude: lat,
         longitude: long,
         contactNumber: phone
      };
   }

   static MapTrainArrivalGroups(
      arrival: TrainArrival[],
      currentStation: StationDetails
   ): StationDetails {
      // sort based on arrival time
      arrival.sort((a, b) => a.secondsToArrive - b.secondsToArrive);

      arrival.forEach((trainArrival) => {
         // step one: define the looking we are looking for
         const locationToFind = trainArrival.station;
         //step two: loop through the stations and find the station we want
         if (
            currentStation.header.title.toUpperCase() + ' STATION' ===
            locationToFind.toUpperCase()
         ) {
            //step three: set the arrivals to that station
            currentStation.allArrivals.push(trainArrival);
         }
      });

      return currentStation;
   }

   static MapObjectToBusRoute(item: GenericItem): BusRoutes {
      const mappedBus = {
         key: Object.keys(item)[0],
         value: Object.values(item)[0]
      };
      const busRoute: BusRoutes = {
         routeID: parseInt(mappedBus.key),
         name: mappedBus.value as string
      };
      return busRoute;
   }
}
