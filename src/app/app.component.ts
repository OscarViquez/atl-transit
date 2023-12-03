import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@atl-transit/navigation';
import { CommonModule } from '@angular/common';
import { SearchModalComponent } from '@atl-transit/search';
import { UserStateInterface } from '@atl-transit/global-state';
import { Store } from '@ngrx/store';
import { StationStateInterface, userLocationAction, generalStationActions } from '@atl-transit/global-state';
import { SharedService } from '@atl-transit/shared';

@Component({
   standalone: true,
   imports: [CommonModule, RouterModule, NavigationComponent, SearchModalComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor(
      private store: Store<UserStateInterface>,
      private stationStore: Store<StationStateInterface>,
      public shared: SharedService
   ) {}

   ngOnInit(): void {
      this.store.dispatch(userLocationAction.location());
      this.stationStore.dispatch(generalStationActions.stationLocate());
   }
}
