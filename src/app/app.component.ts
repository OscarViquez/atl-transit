import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@atl-transit/navigation';
import { CommonModule } from '@angular/common';
import { SearchModalComponent } from '@atl-transit/search';
import { UserStateInterface, userLocationAction } from '@atl-transit/global-state';
import { Store } from '@ngrx/store';

@Component({
   standalone: true,
   imports: [CommonModule, RouterModule, NavigationComponent, SearchModalComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   searchModalActive = false;

   constructor(private store: Store<UserStateInterface>) {}

   ngOnInit() {
      this.store.dispatch(userLocationAction.location());
   }

   toggleSearchModal(bool: boolean): void {
      this.searchModalActive = bool;
   }
}
