/* eslint-disable @nx/enforce-module-boundaries */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndpointResponse, DevEndPointResponse } from '../../types';
import { MartaArrivalResponse } from '../../models';
import {
   AmenitiesStationInterface,
   GeneralStationResponse,
   ScheduleStationInterface
} from '@atl-transit/stations';

@Injectable({
   providedIn: 'root'
})
export class DataService {
   // Get all resources
   // TODO: Create an interface for the Observable,
   // TODO: To be Specific what will the data look like when passing through the observable

   /* Constructor Here  */
   constructor(private http: HttpClient) {}

   /* get Data Methods Declared Here  */
   getStationData(): Observable<GeneralStationResponse[]> {
      return this.http.get<GeneralStationResponse[]>(DevEndPointResponse.GENERAL_STATION_RESPONSE);
   }

   getAmenitiesData(): Observable<AmenitiesStationInterface[]> {
      return this.http.get<AmenitiesStationInterface[]>(
         DevEndPointResponse.AMENITIES_STATION_RESPONSE
      );
   }

   getStationSchedule(): Observable<ScheduleStationInterface[]> {
      return this.http.get<ScheduleStationInterface[]>(DevEndPointResponse.STATION_SCHEDULE_RESPONSE);
   }

   getArrivalPredictionData(): Observable<object[]> {
      return this.http.get<object[]>(EndpointResponse.PREDICTIONS_RESPONSE);
   }

   getSignpostResponse(): Observable<object[]> {
      return this.http.get<object[]>(EndpointResponse.SIGNPOST_TRAIN_RESPONSE);
   }

   getArrivalTimes(): Observable<MartaArrivalResponse[]> {
      return this.http.get<MartaArrivalResponse[]>(DevEndPointResponse.RAIL_ARRIVAL_TIMES_RESPONSE);
   }
}
