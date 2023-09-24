import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RailArrivalTimesService {
 martaAPITimes: string = 'https://www.itsmarta.com/arrivals.aspx'

  constructor(private http: HttpClient) {}

  // Get all resources
  getAll() : Observable<Object[]> {
    return this.http.get<Object[]>(this.martaAPITimes);
  }

}
