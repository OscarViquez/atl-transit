import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  ],
  template: `
    <main class="flex flex-col gap-8 mx-auto pb-8">
      <div class="flex flex-col gap-8">
        <section class="flex flex-col gap-4">
          <core-header [content]="staticContent.header" />
          <div>
            @if (facade.isLocationOn$ | async; as isLocationOn) {
              @defer {
                <core-badge class="animate-fade-up" color="blue"> Location On </core-badge>
              } @loading (minimum 2000ms) {
                <core-badge class="animate-fade-up" color="gray"> Loading Location... </core-badge>
              }
            } @else {
              <core-badge class="animate-fade-up" color="gray"> Loading Off </core-badge>
            }
          </div>
        </section>
        <core-tab-list
          [labels]="staticContent.tabs"
          (currentTabEmitter)="currentTabSetter($event)" />

        <section class="flex flex-col gap-8">
          @if (facade.trainPageArrivals$ | async; as arrivals) {
            @if (currentTabIndex === 0) {
              @for (nearestStations of arrivals.nearestStations; track idx; let idx = $index) {
                <div class="animate-fade-up">
                  <app-station-train-arrival-card
                    [content]="nearestStations"
                    (saveEmitter)="onSaveStation($event)" />
                </div>
              } @empty {
                <core-info-message [content]="messaging.noSavedStations" />
              }
            }

            @if (currentTabIndex === 1) {
              @defer {
                @for (savedStation of arrivals.savedStations; track idx; let idx = $index) {
                  <app-station-train-arrival-card
                    [content]="savedStation"
                    (saveEmitter)="onSaveStation($event)" />
                } @empty {
                  <core-info-message [content]="messaging.noSavedStations" />
                }
              } @loading {
                <core-loading-skeleton />
              } @error {
                An error has occured
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
    this.facade.getGeolocationState();
    this.facade.getAllTrainArrivals();
  }

  currentTabSetter(index: number): void {
    this.currentTabIndex = index;
  }

  onSaveStation(station: { isSaved: boolean; name: string }): void {
    station.isSaved
      ? this.facade.saveStation(station.name)
      : this.facade.removeStation(station.name);
  }
}
