/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   TabComponent,
   HeaderComponent,
   SearchBarComponent,
   LayoutDirective,
   DividerComponent,
   SharedService
} from '@atl-transit/shared';
import { FooterComponent } from '@atl-transit/navigation';
import { TRAIN_PAGE_MOCKS } from '../../mocks/train-page-mocks';
import { StationArrivalListComponent, StationResourcesComponent } from '../../components';
import { TrainPage } from '../../models';

@Component({
   selector: 'rya-train-page',
   standalone: true,
   imports: [
      CommonModule,
      LayoutDirective,
      DividerComponent,
      SearchBarComponent,
      HeaderComponent,
      TabComponent,
      StationResourcesComponent,
      StationArrivalListComponent,
      FooterComponent
   ],
   templateUrl: './train-page.component.html',
   styleUrls: ['./train-page.component.scss']
})
export class TrainPageComponent {
   content: TrainPage = TRAIN_PAGE_MOCKS;
   currentTabIndex = 0;

   constructor(public shared: SharedService) {}
   currentTabSetter(index: number): void {
      this.currentTabIndex = index;
   }
}
