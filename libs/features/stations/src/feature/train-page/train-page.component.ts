/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   TabListComponent,
   HeaderComponent,
   SearchBarComponent,
   BadgeComponent,
   LocationIconComponent
} from '@atl-transit/shared';
import { TRAIN_PAGE_MOCKS, TrainPage } from '../../shared';
import { StationArrivalListComponent } from '../../ui'; // import { TrainPage } from '../../models';

@Component({
   selector: 'stations-train-page',
   standalone: true,
   imports: [
      CommonModule,
      SearchBarComponent,
      HeaderComponent,
      TabListComponent,
      StationArrivalListComponent,
      BadgeComponent,
      LocationIconComponent
   ],
   templateUrl: './train-page.component.html'
})
export class TrainPageComponent {
   content: TrainPage = TRAIN_PAGE_MOCKS;
   currentTabIndex = 0;

   currentTabSetter(index: number): void {
      this.currentTabIndex = index;
   }
}
