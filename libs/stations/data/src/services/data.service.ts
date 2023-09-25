import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EndpointResponse } from '../types';

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
   getArrivalPredictionData(): Observable<object[]> {
      return this.http.get<object[]>(EndpointResponse.PREDICTIONS_RESPONSE);
   }

   getSignpostResponse(): Observable<object[]> {
      return this.http.get<object[]>(EndpointResponse.SIGNPOST_TRAIN_RESPONSE);
   }

   getArrivalTimes(): Observable<object[]> {
      return this.http.get<object[]>(EndpointResponse.RAIL_ARRIVAL_TIMES_RESPONSE);
   }
}
