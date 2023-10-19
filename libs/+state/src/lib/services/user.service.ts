import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User = {
    latitude: 0,
    longitude: 0,
    closestStation: []
}
  
 
}
