import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavigationComponent } from '@atl-transit/navigation';
import { Store } from '@ngrx/store';
import { UserStateInterface, StationStateInterface, userLocationAction, generalStationActions} from '@atl-transit/global-state';

@Component({
   standalone: true,
   imports: [
      RouterModule,
      NavigationComponent
   ],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
   
   constructor(
      private state: Store<UserStateInterface>,
      private stationStore: Store<StationStateInterface>
   ) {}

   ngOnInit(): void {
      this.state.dispatch(userLocationAction.location());
      this.stationStore.dispatch(generalStationActions.stationLocate());
   }
   
}
