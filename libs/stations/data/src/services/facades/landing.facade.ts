/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { RailArrival } from 'libs/stations/ui/src/lib/models';
import { MartaArrivalResponse } from '../../models';
import { DataService } from '../data.service';
import { StationInterface } from 'stations-ui';
import { AdapterService } from '../adapters/train-arrivals.adapter';
import { HttpClient } from '@angular/common/http';
import { JsonStationInterface, BusRoutes } from 'libs/stations/ui/src/lib/types';
@Injectable({
   providedIn: 'root'
})
export class Facade {
   arrivalData!: MartaArrivalResponse[];
   railArrivalData: RailArrival[] = [];
   allStations: StationInterface[] = [];
   constructor(
      private readonly store: Store,
      private dataService: DataService,
      private httpClient: HttpClient
   ) {}

   //arrivalData$ = this.store.pipe(select(selectArrivalsResponse))

   async initializePageRender(): Promise<boolean> {
      //this.store.dispatch(actions.loadRailArrival());

      try {
         const stationResponse = await this.httpClient.get<JsonStationInterface[]>(
            '/assets/json/marta.trains.json'
         );

         stationResponse.subscribe((data) => {
            data.forEach((res) => {
               // define bus routes
               const routes: BusRoutes[] = [];
               res.connectingbusroutes.forEach((x) => {
                  const busRoute: BusRoutes = {
                     routeID: x.routeID,
                     name: x.name
                  };

                  routes.push(busRoute);
               });

               // map the response to the interface
               const mappedResponse: StationInterface = {
                  name: res.name,
                  description: 'fill here',
                  latitude: parseFloat(res.latitude),
                  longitude: parseFloat(res.longitude),
                  contactnumber: res.contactnumber,
                  connectingbusroutes: routes,
                  ammenities1: res.amenities1,
                  ammenities2: res.amenities2,
                  ammenities3: res.amenities3,
                  ammenities4: res.amenities4,
                  arrivals: []
               };

               this.allStations.push(mappedResponse);
            });
         });

         await this.dataService.getArrivalTimes().subscribe((item) => {
            this.arrivalData = item;

            this.arrivalData.forEach((arrival) => {
               const mappedObject = AdapterService.MapToRailArrival(arrival);
               this.railArrivalData.push(mappedObject);
            });

            if (this.railArrivalData.length > 0) {
               return true;
            } else {
               return false;
            }
         });

         return true; // this logic dont make sense help me,(o) Of Course :)
      } catch (error) {
         console.log('Eror' + error);
         return false;
      }
   }
}
