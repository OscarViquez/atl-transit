/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabListComponent, HeaderComponent, SearchBarComponent } from '@atl-transit/shared';
import { TRAIN_PAGE_MOCKS } from '../../mocks/train-page-mocks';
import { StationArrivalListComponent } from '../../components';
import { TrainPage } from '../../models';

@Component({
   selector: 'rya-train-page',
   standalone: true,
   imports: [
      CommonModule,
      SearchBarComponent,
      HeaderComponent,
      TabListComponent,
      StationArrivalListComponent
   ],
   templateUrl: './train-page.component.html',
   styleUrls: ['./train-page.component.scss']
})
export class TrainPageComponent {
   content: TrainPage = TRAIN_PAGE_MOCKS;
   currentTabIndex = 0;

   currentTabSetter(index: number): void {
      this.currentTabIndex = index;
   }
}
