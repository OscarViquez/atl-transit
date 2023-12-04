import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@atl-transit/navigation';
import { CommonModule } from '@angular/common';
import { SearchModalComponent } from '@atl-transit/search';
import { UserStateInterface } from '@atl-transit/global-state';
import { Store } from '@ngrx/store';
import { StationStateInterface, userLocationAction, generalStationActions } from '@atl-transit/global-state';
import { SharedService } from '@atl-transit/shared';
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
      private updates: SwUpdate,
      public shared: SharedService
   ) {}

   ngOnInit(): void {
      this.updatePWA(this.updates);
      this.store.dispatch(userLocationAction.location());
      this.stationStore.dispatch(generalStationActions.stationLocate());
   }

   updatePWA(updates: SwUpdate) {
      updates.versionUpdates.subscribe((event) => {
         updates.activateUpdate().then(() => document.location.reload());
      });
   }
}
