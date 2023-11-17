import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class TabToggleService {
   currentTabIndex = 0;
   Loading = true;
}
