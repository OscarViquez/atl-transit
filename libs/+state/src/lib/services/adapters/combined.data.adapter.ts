/* eslint-disable @nx/enforce-module-boundaries */
import { Observable, Observer } from 'rxjs';
import { RailArrival, JsonStationInterface, RailDirection, StationInterface, BusRoutes } from 'stations-ui';
import { MartaArrivalResponse } from '../../models';
import { TrainArrivalAdapter } from './index';


export class CombinedDataAdapter {

   static MapCombinedStationArrivalData(stationData: JsonStationInterface[], railData: MartaArrivalResponse[]) : StationInterface[]
    {
        //step 1: convert from from json to station interface 

        const mappedStationData = TrainArrivalAdapter.MapJsonToStationInterface(stationData);
        let mappedRailData: RailArrival[] = []
        railData.forEach((rail) => {
            mappedRailData.push(TrainArrivalAdapter.MapToRailArrival(rail));
        })

        //step 2: Map arrival groups on their location 

       return TrainArrivalAdapter.MapRailArrivalGroups(mappedRailData, mappedStationData);

    }

    


}