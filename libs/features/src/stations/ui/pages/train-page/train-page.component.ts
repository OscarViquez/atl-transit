/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
import { TrainPageConfig, TrainPageContent, TrainStation } from '../../../shared';
import { TrainPageService } from '../../../services';
import {
   ResourceSectionComponent,
   TrainJourneyComponent,
   TrainSectionComponent
} from '../../components';
import {
   TabComponent,
   HeaderComponent,
   SearchBarComponent,
   SharedService
} from '@atl-transit/shared';
import { FooterComponent } from '@atl-transit/navigation';

@Component({
   selector: 'rya-train-page',
   standalone: true,
   imports: [
      CommonModule,
      SearchBarComponent,
      HeaderComponent,
      TabComponent,
      TrainSectionComponent,
      ResourceSectionComponent,
      FooterComponent,
      TrainJourneyComponent
   ],
   templateUrl: './train-page.component.html',
   styleUrls: ['./train-page.component.scss']
})
export class TrainPageComponent implements OnInit {
   content!: TrainPageContent;
   config!: TrainPageConfig;
   data$!: Observable<{ loading: boolean; trains: TrainStation[] }>;

   constructor(private service: TrainPageService, public shared: SharedService) {}

   ngOnInit(): void {
      this.content = this.service.initializeData().content;
      this.data$ = this.service.initializeData().data$;
      this.config = this.service.initializeData().content.config;

      this.data$.subscribe((x) => {
         console.log(x.trains)
      })
   }

   currentTabSetter(index: number): void {
      this.config.currentTabIndex = index;
   }
}
