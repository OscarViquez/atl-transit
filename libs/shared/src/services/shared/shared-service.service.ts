import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root'
})
export class SharedService {
   searchModalActive = false;

   // TODO: Delete this method
   toggleSearchModal(): void {
      this.searchModalActive = !this.searchModalActive;
   }
}
