import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { TrainArrivalInfo } from '../../models/api.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getTrainArrivals(): Observable<TrainArrivalInfo[]> {
    return this.handleApiRequest(
      this.http.get<TrainArrivalInfo[]>(`${environment.apiUrl}/train/arrivals`)
    );
  }

  private handleApiRequest<T>(api: Observable<T>): Observable<T> {
    return api.pipe(
      catchError(error => {
        return throwError(() => new Error(error));
      })
    );
  }
}
