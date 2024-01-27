/* eslint-disable @nx/enforce-module-boundaries */
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabComponent, HeaderComponent, SearchBarComponent } from '@atl-transit/shared';
import { FooterComponent } from '@atl-transit/navigation';

@Component({
   selector: 'rya-train-page',
   standalone: true,
   imports: [CommonModule, SearchBarComponent, HeaderComponent, TabComponent, FooterComponent],
   templateUrl: './train-page.component.html',
   styleUrls: ['./train-page.component.scss']
})
export class TrainPageComponent implements OnInit {
   // content!: TrainPageContent;
   // config!: TrainPageConfig;
   // data$!: Observable<{ loading: boolean; trains: TrainStation[] }>;

   ngOnInit(): void {
      // this.content = this.service.initializeData().content;
      // this.data$ = this.service.initializeData().data$;
      // this.config = this.service.initializeData().content.config;
      console.log('TrainPageComponent', 'test');
   }

   currentTabSetter(index: number): void {
      console.log('currentTabSetter', index);
      // this.config.currentTabIndex = index;
   }
}
