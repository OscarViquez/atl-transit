/* eslint-disable @nx/enforce-module-boundaries */
import { RailArrival } from 'libs/stations/ui/src/lib/models';
import { MartaArrivalResponse } from '../../models';
import { JsonStationInterface, RailDirection } from 'libs/stations/ui/src/lib/types';
import { StationInterface } from 'libs/stations/ui/src/lib/types';

export class AdapterService {
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
         arrivalTime: item.WAITING_TIME
      };
   }

   static MapJsonToStationInterface(
      allStations: JsonStationInterface[]
   ): StationInterface[] {
      return [];
   }

   static MapRailArrivalGroups(
      arrival: RailArrival[],
      currentStations: StationInterface[]
   ): StationInterface[] {
      //
      arrival.forEach((trainArrival) => {
         // step one: define the looking we are looking for
         const locationToFind = trainArrival.station;
         //step two: loop through the stations and find the station we want
         currentStations.forEach((station, index) => {
            if (station.name === locationToFind) {
               //step three: set the arrivals to that station
               currentStations[index].arrivals.push(trainArrival);
            }
         });
      });

      return currentStations;
   }
}
