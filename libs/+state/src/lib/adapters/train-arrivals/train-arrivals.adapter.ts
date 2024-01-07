/* eslint-disable @nx/enforce-module-boundaries */
import {
   RailArrival,
   GeneralStationResponse,
   RailDirection,
   StationDetails,
   BusRoutes
} from '@atl-transit/stations';
import { GenericItem, MartaArrivalResponse } from '../../models';

export class TrainArrivalAdapter {
   static MapToRailArrival(item: MartaArrivalResponse): RailArrival {
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
      return {
         station: item.STATION,
         direction: direction,
         destination: item.DESTINATION,
         description: direction + 'bound',
         color: item.LINE.toLowerCase(),
         secondsToArrive: item.WAITING_SECONDS,
         arrivalTime: item.WAITING_TIME
      };
   }

   static MapJsonToStationInterface(allStations: GeneralStationResponse[]): StationDetails[] {
      return allStations.map((station) => {
         const routes: BusRoutes[] = [];

         return {
            station_key: station._station_key,
            name: station.name,
            description: station.description,
            latitude: parseFloat(station.latitude),
            longitude: parseFloat(station.longitude),
            contactnumber: station.contactnumber,
            connectingbusroutes: routes,
            ammenities_key: station.amenities,
            arrivals: []
         };
      });
   }

   static MapRailArrivalGroups(
      arrival: RailArrival[],
      currentStations: StationDetails[]
   ): StationDetails[] {
      // sort based on arrival time
      arrival.sort((a, b) => a.secondsToArrive - b.secondsToArrive);

      arrival.forEach((trainArrival) => {
         // step one: define the looking we are looking for
         const locationToFind = trainArrival.station;
         //step two: loop through the stations and find the station we want
         currentStations.forEach((station, index) => {
            if (station.name.toUpperCase() === locationToFind.toUpperCase()) {
               //step three: set the arrivals to that station
               currentStations[index].arrivals.push(trainArrival);
            }
         });
      });

      return currentStations;
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
