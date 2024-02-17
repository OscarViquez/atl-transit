/* eslint-disable @nx/enforce-module-boundaries */
import { TrainArrival, RailDirection, StationDetails, TrainDaySchedule } from '@atl-transit/stations';
import { MartaArrivalResponse } from '../../models';
import { StationArrivalItem, StationSchedule } from '@atl-transit/stations';
import { BadgeColor } from '@atl-transit/shared';

export const getStationArrivalItems = (station_schedule: StationSchedule): StationArrivalItem[] => {
   const day_of_week = new Date().toLocaleString("en-US", { weekday: 'long' });
   const station_arrival_items: StationArrivalItem[] = [];
   station_schedule.lines.forEach((line) => {line.schedules
      line.schedules.forEach((schedule_item) => {
         if(day_of_week == "Saturday" && schedule_item.day == "saturday"){
            station_arrival_items.concat(mapArrivalItem(schedule_item, line.line as BadgeColor))
         }
         if(day_of_week == "Sunday" && schedule_item.day == "sunday")
         {
            station_arrival_items.concat(mapArrivalItem(schedule_item, line.line as BadgeColor))
         }
         else
         {
            station_arrival_items.concat(mapArrivalItem(schedule_item, line.line as BadgeColor))
         }
      })
   })

   return station_arrival_items
};

export const mapArrivalItem = (schedule_item: TrainDaySchedule, line: BadgeColor): StationArrivalItem[]  => {
   const arrival_items: StationArrivalItem[] = [];
   schedule_item.schedule.forEach((item) => {
      const station_arrival = {
         date: new Date(item), 
         is_arriving: false,
         time: "",
         destination: schedule_item.direction,
         direction: schedule_item.direction,
         line: line 
   }
      arrival_items.push(station_arrival)
   });

   return arrival_items;
}

export const getAllArrivalStationItems = (
   arrivalResponse: MartaArrivalResponse[]
): TrainArrival[] => {
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
   arrival.sort((a, b) => a.secondsToArrive - b.secondsToArrive);

   arrival.forEach((trainArrival) => {
      const locationToFind = trainArrival.station;
      if (currentStation.header.title.toUpperCase() + ' STATION' === locationToFind.toUpperCase()) {
         currentStation.allArrivals.push(trainArrival);
      }
   });

   return currentStation;
};
