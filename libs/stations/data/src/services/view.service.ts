 import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';

 @Injectable({
   providedIn: 'root'
 })
 export class ViewService {
 currentTabIndex: number = 0
 Loading: boolean = true;
   
  
 }
