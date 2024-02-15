/* eslint-disable @nx/enforce-module-boundaries */
import { TrainArrival, RailDirection, StationDetails } from '@atl-transit/stations';
import { MartaArrivalResponse } from '../../models';

export const getAllTrainArrivals = (arrivalResponse: MartaArrivalResponse[]): TrainArrival[] => {
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
      const arrivalData = {
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
};

export const getTrainArrivalGroups = (
   arrival: TrainArrival[],
   currentStation: StationDetails
): StationDetails => {
   // sort based on arrival time
   arrival.sort((a, b) => a.secondsToArrive - b.secondsToArrive);

   arrival.forEach((trainArrival) => {
      // step one: define the looking we are looking for
      const locationToFind = trainArrival.station;
      //step two: loop through the stations and find the station we want
      if (currentStation.header.title.toUpperCase() + ' STATION' === locationToFind.toUpperCase()) {
         //step three: set the arrivals to that station
         currentStation.allArrivals.push(trainArrival);
      }
   });

   return currentStation;
};
