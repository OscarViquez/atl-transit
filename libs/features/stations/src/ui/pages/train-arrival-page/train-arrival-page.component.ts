/* eslint-disable @nx/enforce-module-boundaries */
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { StationCardComponent, StationErrorMessageComponent } from '../../components';
import { ArrivalPageConfig, TrainPageContent, TrainStaion } from '../../../shared';
import {
   HeroComponent,
   TabComponent,
   LoadingSkeletonComponent,
   HeaderComponent,
   SearchBarComponent,
   SharedService
} from '@atl-transit/shared';
import { StaticContentService, TrainArrivalsService } from '../../../data';
@Component({
   selector: 'lib-train-arrivals-page',
   standalone: true,
   imports: [
      CommonModule,
      StationErrorMessageComponent,
      HeroComponent,
      TabComponent,
      StationCardComponent,
      LoadingSkeletonComponent,
      HeaderComponent,
      SearchBarComponent
   ],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit {
   content!: TrainPageContent;
   config!: ArrivalPageConfig;
   trainData$!: Observable<TrainStaion[]>;
   pageLoaded$!: Observable<boolean>;

   constructor(
      private trainArrivalService: TrainArrivalsService,
      private contentService: StaticContentService,
      public shared: SharedService
   ) {}

   ngOnInit(): void {
      this.content = this.contentService.setTrainPageContent();
      this.trainData$ = this.trainArrivalService.initializeData().trainData$;
      this.pageLoaded$ = this.trainArrivalService.initializeData().pageLoaded$;
      this.config = this.trainArrivalService.setConfig();
   }

   currentTabSetter(index: number): void {
      this.config.currentTabIndex = index;
   }
}
