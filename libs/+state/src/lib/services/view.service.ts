import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class ViewService {
   currentTabIndex = 0;
   Loading = true;
}
