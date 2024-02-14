/* eslint-disable @nx/enforce-module-boundaries */
import { ButtonLegacy, Header } from '@atl-transit/shared';
import { StationDetails, TrainStation } from '@atl-transit/stations';

export class TrainUiAdapter {
   // This is to map for static content
   static MapStationsToUi(stations: StationDetails[]): TrainStation[] {
      const uiStations: TrainStation[] = [];
      stations.forEach((station) => {
         const header = this.MapStationToHeader(station);

         // TODO: Remove button after removing this interface from methods // REMOVE THIS ❌
         // * EITHER WAY WE WILL REFACTOR ALL OF THESE ADAPTERS
         const button: ButtonLegacy = {
            text: 'More details',
            hyperLink: '/' + station.stationKey
         };

         const trainUiStationIndividual: TrainStation = {
            header: header,
            trainArrivals: station.allArrivals,
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
   static MapStationToHeader(station: StationDetails): Header {
      const linesCount: string[] = [];

      station.allArrivals.forEach((arrival) => {
         if (!linesCount.includes(arrival.color)) {
            linesCount.push(arrival.color);
         }
      });

      let description = '';

      switch (linesCount.length) {
         case 4:
            description = 'All lines currently available';
            break;
         case 3:
            description = 'Three lines currently available';
            break;
         case 2:
            description = 'Two lines currently available';
            break;
         case 1:
            description = 'One line currently available';
            break;
         default:
            description = 'No lines currently available';
            break;
      }

      const header: Header = {
         title: this.MapHeaderToUiView(station.header.title),
         description: description
      };

      return header;
   }
}
