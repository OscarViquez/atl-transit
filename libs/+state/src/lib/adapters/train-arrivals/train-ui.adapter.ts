/* eslint-disable @nx/enforce-module-boundaries */
import { Button, GenericHeader } from '@atl-transit/shared';
import { StationInterface, TrainStaion } from '@atl-transit/stations';

export class TrainUiAdapter {
   static MapStationsToUi(stations: StationInterface[]): TrainStaion[] {
      const uiStations: TrainStaion[] = [];
      stations.forEach((station) => {
         const header = this.MapStationToHeader(station);
         const button: Button = {
            text: 'More details',
            mode: 'light'
         };

         const trainUiStationIndividual: TrainStaion = {
            header: header,
            railArrivals: station.arrivals,
            button: button
         };

         uiStations.push(trainUiStationIndividual);
      });

      return uiStations;
   }

   static MapHeaderToUiView(name: string): string {
      const reducedName = name.replace('STATION', '').trim();
      let lowerCasedName = reducedName.toLowerCase();
      const spaceLocations = this.findSpacesIndices(lowerCasedName);

      lowerCasedName = lowerCasedName.charAt(0).toUpperCase() + lowerCasedName.slice(1);

      spaceLocations.forEach((index) => {
         lowerCasedName =
            lowerCasedName.substring(0, index + 1) +
            lowerCasedName.charAt(index + 1).toUpperCase() +
            lowerCasedName.substring(index + 2);
      });

      return lowerCasedName;
   }

   static findSpacesIndices(inputString: string): number[] {
      const spaceIndices: number[] = [];
      for (let i = 0; i < inputString.length; i++) {
         if (inputString[i] === ' ') {
            spaceIndices.push(i);
         }
      }
      return spaceIndices;
   }
   static MapStationToHeader(station: StationInterface): GenericHeader {
      const linesCount: string[] = [];

      station.arrivals.forEach((arrival) => {
         if (!linesCount.includes(arrival.color)) {
            linesCount.push(arrival.color);
         }
      });

      let subtitle = '';

      switch (linesCount.length) {
         case 4:
            subtitle = 'All lines currently available';
            break;
         case 3:
            subtitle = 'Three lines currently available';
            break;
         case 2:
            subtitle = 'Two lines currently available';
            break;
         case 1:
            subtitle = 'One line currently available';
            break;
         default:
            subtitle = 'No lines currently available';
            break;
      }

      const header: GenericHeader = {
         title: this.MapHeaderToUiView(station.name),
         subtitle: subtitle
      };

      return header;
   }
}
