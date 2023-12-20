import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import {
   StationStateInterface,
   userLocationAction,
   generalStationActions,
   UserStateInterface
} from '@atl-transit/global-state';
import { SharedService } from '@atl-transit/shared';
import { NavigationComponent, SearchModalComponent } from '@atl-transit/features-ui';
import { SwUpdate } from '@angular/service-worker';
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

   updatePWA(updates: SwUpdate) {
      // TODO: Add a toast notification to let the user know that the app has been updated
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      updates.versionUpdates.subscribe((event) => {
         updates.activateUpdate().then(() => document.location.reload());
      });
   }
}
