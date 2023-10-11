/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RailArrival, TrainStaion } from 'libs/stations/ui/src/lib/models';
import { MartaArrivalResponse } from '../../models';

import { DataService } from '../data.service';
import { StationInterface } from 'stations-ui';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

import { TrainArrivalAdapter, TrainUiAdapter, UserAdapter } from '../adapters/';
import { JsonStationInterface, BusRoutes } from 'libs/stations/ui/src/lib/types';


@Injectable({
   providedIn: 'root'
})
export class Facade {
   constructor(
      private readonly store: Store,
      private dataService: DataService,
      private httpClient: HttpClient,
      private user: UserService
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


         
         const currentStations = TrainArrivalAdapter.MapJsonToStationInterface(await stationResponse)
         this.allStations = UserAdapter.MapClosestStationToUser(this.user.currentUser, currentStations);

         const arrivalResponse = lastValueFrom(await this.dataService.getArrivalTimes())
         this.arrivalData = await arrivalResponse
         
         this.arrivalData.forEach((arrival) => {
               const mappedObject = TrainArrivalAdapter.MapToRailArrival(arrival);
               this.railArrivalData.push(mappedObject);
        });

         this.allStations = TrainArrivalAdapter.MapRailArrivalGroups(this.railArrivalData, this.allStations)
        this.uiStations = TrainUiAdapter.MapStationsToUi(this.allStations)

       return this.uiStations.length > 0 
         
      } catch (error) {
         console.log('Eror' + error);
         return false;
      }
   }


    async userLocation() : Promise<any>{
    return new Promise((resolve, reject) => {
      if('geolocation' in navigator)
    {
       navigator.geolocation.getCurrentPosition((pos) => {
        this.user.currentUser.latitude = pos.coords.latitude
        this.user.currentUser.longitude = pos.coords.longitude
        console.log(`"Latitude: ${this.user.currentUser.latitude}. Longitude: ${this.user.currentUser.longitude}"`)
        const result = this.initializePageRender()
        resolve(result)
      }, (error) => {
        switch (error.code) {
          case error.PERMISSION_DENIED:
            console.error("User denied the request for geolocation.");
            break;
          case error.POSITION_UNAVAILABLE:
            console.error("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            console.error("The request to get user location timed out.");
            break;
          default:
            console.error("An unknown error occurred.");
        }
      })


     
    }
    })
    }
}

