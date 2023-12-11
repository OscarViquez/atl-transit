/* eslint-disable @nx/enforce-module-boundaries */
import { Observable, Observer } from 'rxjs';
import { RailArrival, JsonStationInterface, StationInterface, TrainStation } from '@atl-transit/stations';
import { MartaArrivalResponse, User } from '../../models';
import { TrainArrivalAdapter, TrainUiAdapter, UserAdapter } from '../index';

export class CombinedDataAdapter {
   static MapCombinedStationArrivalData(
      stationData: JsonStationInterface[],
      railData: MartaArrivalResponse[]
   ): Observable<StationInterface[]> {
      //step 1: convert from from json to station interface

      return new Observable((observer: Observer<any>) => {
         const mappedStationData = TrainArrivalAdapter.MapJsonToStationInterface(stationData);
         const mappedRailData: RailArrival[] = [];
         railData.forEach((rail) => {
            mappedRailData.push(TrainArrivalAdapter.MapToRailArrival(rail));
         });

         //step 2: Map arrival groups on their location
         const mappedData = TrainArrivalAdapter.MapRailArrivalGroups(mappedRailData, mappedStationData);
         observer.next(mappedData);
      });
   }

   static MapUserDataToFullUi(user: User, stations: StationInterface[]): Observable<TrainStation[]> {
      return new Observable((observer: Observer<TrainStation[]>) => {
         const userStations = UserAdapter.MapClosestStationToUser(user, stations);
         const mappedUi = TrainUiAdapter.MapStationsToUi(userStations);

         observer.next(mappedUi);
      });
   }
}
