/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RailArrival, TrainStaion } from 'libs/stations/ui/src/lib/models';
import { MartaArrivalResponse } from '../../models';
import { DataService } from '../data.service';
import { StationInterface } from 'stations-ui';
import { TrainArrivalAdapter, TrainUiAdapter } from '../adapters/';
import { HttpClient } from '@angular/common/http';
import { JsonStationInterface, BusRoutes } from 'libs/stations/ui/src/lib/types';
import { lastValueFrom } from 'rxjs';
@Injectable({
   providedIn: 'root'
})
export class Facade {
   constructor(
      private readonly store: Store,
      private dataService: DataService,
      private httpClient: HttpClient
   ) {}
   
   arrivalData!: MartaArrivalResponse[];
   railArrivalData: RailArrival[] = [];
   allStations: StationInterface[] = [];
   uiStations: TrainStaion[] = []
   
   //arrivalData$ = this.store.pipe(select(selectArrivalsResponse))

   async initializePageRender(): Promise<boolean> {
      //this.store.dispatch(actions.loadRailArrival());

      try {
         const stationResponse = lastValueFrom(await this.httpClient.get<JsonStationInterface[]>(
            '/assets/json/marta.trains.json'
         ))


         
         this.allStations = TrainArrivalAdapter.MapJsonToStationInterface(await stationResponse)
         

         const arrivalResponse = lastValueFrom(await this.dataService.getArrivalTimes())
         this.arrivalData = await arrivalResponse
         
         this.arrivalData.forEach((arrival) => {
               const mappedObject = TrainArrivalAdapter.MapToRailArrival(arrival);
               this.railArrivalData.push(mappedObject);
        });

         this.allStations = TrainArrivalAdapter.MapRailArrivalGroups(this.railArrivalData, this.allStations)
        this.uiStations = TrainUiAdapter.MapStationsToUi(this.allStations)

            if (this.uiStations.length > 0) {
               return true;
            } else {
               return false;
            }
         
      } catch (error) {
         console.log('Eror' + error);
         return false;
      }
   }
}
