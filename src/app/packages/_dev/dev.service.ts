import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DevService {
  private usersSubject = new BehaviorSubject<any[]>([]);
  users$ = this.usersSubject.asObservable();

  private photoSubject = new BehaviorSubject<any[]>([]);
  photos$ = this.photoSubject.asObservable();

  constructor(private http: HttpClient) {}

  private handleApiCall<T>(apiCall: Observable<T>): Observable<T> {
    return apiCall.pipe(
      catchError(error => {
        return throwError(() => new Error(error));
      }),
      finalize(() => {})
    );
  }

  getUsers(): Observable<any> {
    return this.handleApiCall(this.http.get('https://jsonplaceholder.typicode.com/users'));
  }
}
