import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RailPredictionService{
 martaAPITimes: string = 'http://labs.itsmarta.com/signpost/predictions'

  constructor(private http: HttpClient) {}

  // Get all resources
  getAll() : Observable<Object[]> {
    return this.http.get<Object[]>(this.martaAPITimes);
  }
  
}
