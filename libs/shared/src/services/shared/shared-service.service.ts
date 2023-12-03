import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class SharedService {
   searchModalActive = false;

   toggleSearchModal(): void {
      this.searchModalActive = !this.searchModalActive;
   }
}
