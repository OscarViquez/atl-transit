import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FacadeService } from '@atl-transit/data-access';
import {
  BadgeComponent,
  HeaderComponent,
  InfoMessageComponent,
  LoadingSkeletonComponent,
  StationTrainArrivalCardComponent,
  TabListComponent,
} from '@atl-transit/core';
import {
  TRAIN_PAGE_MESSAGING,
  TRAIN_PAGE_STATIC_CONTENT,
} from '../../constants/train-page.constants';
import { TrainPageMessaging, TrainPageStaticContent } from '../../interfaces/train-page.interfaces';

@Component({
  selector: 'app-train-page',
  standalone: true,
  imports: [
    CommonModule,
    TabListComponent,
    HeaderComponent,
    LoadingSkeletonComponent,
    InfoMessageComponent,
    StationTrainArrivalCardComponent,
    BadgeComponent,
    DatePipe,
  ],
  template: `
    <main class="px-6 pt-12 lg:pt-0 lg:px-0 pb-12">
      <div class="flex flex-col gap-10">
        <section class="flex flex-col gap-4">
          <core-header [content]="staticContent.header" />
          <div class="h-5">
            @if (facade.geoLocation$ | async; as location) {
              @defer {
                <core-badge
                  class="animate-fade-up"
                  [color]="location.isLocationAllowed ? 'blue' : 'gray'">
                  Location {{ location.isLocationAllowed ? 'On' : 'Off' }}
                </core-badge>
              } @loading (minimum 800ms) {
                <core-badge class="animate-fade-up" color="gray"> Loading Location... </core-badge>
              }
            }
          </div>
        </section>

        <core-tab-list
          [labels]="staticContent.tabs"
          (currentTabEmitter)="currentTabSetter($event)" />

        <section class="flex flex-col gap-6">
          @if (facade.nearbyStations$ | async; as arrivals) {
            @if (currentTabIndex === 0) {
              @for (arrival of arrivals; track idx; let idx = $index) {
                <div class="animate-fade-up">
                  <app-station-train-arrival-card
                    [content]="arrival"
                    (saveEmitter)="onSaveStation($event)" />
                </div>
              } @empty {
                <core-info-message [content]="messaging.noSavedStations" />
              }
            }
          }

          @if (facade.savedStations$ | async; as arrivals) {
            @if (currentTabIndex === 1) {
              @defer {
                @for (arrival of arrivals; track idx; let idx = $index) {
                  <app-station-train-arrival-card
                    [content]="arrival"
                    (saveEmitter)="onSaveStation($event)" />
                } @empty {
                  <core-info-message [content]="messaging.noSavedStations" />
                }
              } @loading {
                <core-loading-skeleton />
              }
            }
          }
        </section>
      </div>
    </main>
  `,
})
export class TrainPageComponent implements OnInit {
  facade = inject(FacadeService);
  messaging: TrainPageMessaging = TRAIN_PAGE_MESSAGING;
  staticContent: TrainPageStaticContent = TRAIN_PAGE_STATIC_CONTENT;
  currentTabIndex = 0;

  ngOnInit(): void {
    this.facade.updateGeolocation();
    this.facade.fetchAllArrivals();
  }

  currentTabSetter(index: number): void {
    this.currentTabIndex = index;
  }

  onSaveStation(station: { isSaved: boolean; name: string }): void {
    station.isSaved
      ? this.facade.addSavedStation(station.name)
      : this.facade.removeSavedStation(station.name);
  }
}
