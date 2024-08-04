import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BadgeComponent,
  HeaderComponent,
  StationTrainArrivalCardComponent,
  TabListComponent,
} from '@atl-transit/core';
import { TrainPage, TrainPageMessaging } from '../../interfaces/train-page.interfaces';
import { TRAIN_PAGE_CONTENT, TRAIN_PAGE_MESSAGING } from '../../constants/train-page.constants';

@Component({
  selector: 'app-train-page',
  standalone: true,
  imports: [
    CommonModule,
    TabListComponent,
    HeaderComponent,
    StationTrainArrivalCardComponent,
    BadgeComponent,
  ],
  template: `
    <main class="flex flex-col gap-8 mx-auto pb-8">
      <div class="flex flex-col gap-8">
        <section class="flex flex-col gap-4">
          <core-header [content]="content.header" />
          <div>
            <core-badge [color]="isLocationOn ? 'blue' : 'gray'">
              Location {{ isLocationOn ? 'On' : 'Off' }}
            </core-badge>
          </div>
        </section>

        <core-tab-list [labels]="content.tabs" (currentTabEmitter)="currentTabSetter($event)" />

        <section class="flex flex-col gap-8">
          @if (currentTabIndex === 0) {
            @for (nearestStations of content.nearestStations; track idx; let idx = $index) {
              <app-station-train-arrival-card [content]="nearestStations" />
            }
          }
          @if (currentTabIndex === 1) {
            @for (savedStation of content.savedStations; track idx; let idx = $index) {
              @if (savedStation.isSaved) {
                <app-station-train-arrival-card [content]="savedStation" />
              }
            } @empty {
              <div class="text-center mt-[10rem]">
                <h2 class="text-6 font-semibold mb-4">
                  {{ messages.noSavedStations.title }}
                </h2>
                <p class="text-4 font-medium text-neutral-800">
                  {{ messages.noSavedStations.description }}
                </p>
              </div>
            }
          }
        </section>
      </div>
    </main>
  `,
})
export class TrainPageComponent {
  content: TrainPage = TRAIN_PAGE_CONTENT;

  messages: TrainPageMessaging = TRAIN_PAGE_MESSAGING;

  isLocationOn = false;

  currentTabIndex = 0;

  currentTabSetter(index: number): void {
    this.currentTabIndex = index;
  }
}
