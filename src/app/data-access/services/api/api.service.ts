import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { catchError, Observable, throwError } from 'rxjs';
import {
  StationDetailsEndpointResponse,
  TrainArrivalEndpointResponse,
} from '../../models/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTrainArrivals(): Observable<TrainArrivalEndpointResponse[]> {
    return this.http
      .get<TrainArrivalEndpointResponse[]>(`${environment.apiUrl}/train/arrivals`)
      .pipe(
        catchError(error => {
          return throwError(() => new Error(error));
        })
      );
  }

  getStationDetails(stationName: string): Observable<StationDetailsEndpointResponse> {
    return this.http
      .get<StationDetailsEndpointResponse>(`${environment.apiUrl}/station/${stationName}/info`)
      .pipe(
        catchError(error => {
          return throwError(() => new Error(error));
        })
      );
  }
}
