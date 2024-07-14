/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   TabListComponent,
   HeaderComponent,
   SearchBarComponent,
   BadgeComponent
} from '@atl-transit/shared';
import { TRAIN_PAGE_MOCKS, TrainPage } from '../../shared';
import { StationArrivalListComponent } from '../../ui';

@Component({
   selector: 'stations-train-page',
   standalone: true,
   imports: [
      CommonModule,
      SearchBarComponent,
      HeaderComponent,
      TabListComponent,
      StationArrivalListComponent,
      BadgeComponent
   ],
   template: `
      <main class="flex flex-col gap-8 mx-auto">
         <section class="flex flex-col gap-8">
            <div class="flex flex-col gap-4">
               <shared-header [content]="content.header" />
               <shared-badge color="blue"> Location On </shared-badge>
            </div>
            <shared-tab-list
               [labels]="content.tabs"
               (currentTabEmitter)="currentTabSetter($event)"
            />
         </section>
         <stations-arrival-list
            [content]="{ nearest: content.nearest, saved: content.saved }"
            [currentTabIndex]="currentTabIndex"
         />
      </main>
   `
})
export class TrainPageComponent {
   content: TrainPage = TRAIN_PAGE_MOCKS;
   currentTabIndex = 0;

   currentTabSetter(index: number): void {
      this.currentTabIndex = index;
   }
}
