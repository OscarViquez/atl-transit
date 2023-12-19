/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { StationCardComponent } from '../../components';
import { ArrivalPageConfig, TrainPageContent, TrainStation } from '../../../shared';
import { StaticContentService, TrainArrivalsService } from '../../../services';
import {
   HeroComponent,
   TabComponent,
   LoadingSkeletonComponent,
   HeaderComponent,
   SearchBarComponent,
   SharedService,
   CardFeedbackComponent,
   IconComponent,
   TileComponent
} from '@atl-transit/shared';
import { FooterComponent } from '@atl-transit/navigation';

@Component({
   selector: 'lib-train-arrivals-page',
   standalone: true,
   imports: [
      CommonModule,
      HeroComponent,
      TabComponent,
      StationCardComponent,
      LoadingSkeletonComponent,
      HeaderComponent,
      SearchBarComponent,
      CardFeedbackComponent,
      TileComponent,
      LoadingSkeletonComponent,
      IconComponent,
      FooterComponent
   ],
   templateUrl: './train-arrival-page.component.html',
   styleUrls: ['./train-arrival-page.component.scss']
})
export class TrainArrivalPageComponent implements OnInit {
   content!: TrainPageContent;
   config!: ArrivalPageConfig;
   trainData$!: Observable<TrainStation[]>;
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
