import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
   providedIn: 'root'
})

export class AuthService {

   constructor(private http: HttpClient) {}

   login(credentials: { username: string; password: string }): Observable<string> {
      return this.http.post<string>('/api/login', credentials);
   }

   // ... other auth methods (logout, register, etc.)
}
