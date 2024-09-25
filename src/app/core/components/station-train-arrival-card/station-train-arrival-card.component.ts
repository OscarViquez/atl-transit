import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TrainArrivalDetailsComponent } from '../train-arrival-details/train-arrival-details.component';
import {
  HeaderComponent,
  InfoMessageComponent,
  LoadingSkeletonComponent,
  SaveButtonComponent,
} from '../../ui';
import {
  Header,
  STATION_TRAIN_ARRIVAL_CARD_MESSAGING,
  StationTrainArrivalCard,
} from '../../models';

@Component({
  selector: 'app-station-train-arrival-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TrainArrivalDetailsComponent,
    HeaderComponent,
    InfoMessageComponent,
    SaveButtonComponent,
    LoadingSkeletonComponent,
  ],
  template: `
    <article
      role="link"
      class="card gap-4 border-none shadow-card bg-white cursor-pointer transition-all duration-200 animate-fade-up"
      (click)="navigateToStationDetails()"
      tabindex="0">
      <div class="flex justify-between items-center">
        <core-header [content]="content.header" variant="card" />
        <app-save-button [isSaved]="content.isSaved" (click)="toggleSaved($event)" />
      </div>

      @defer {
        @for (arrival of content.arrivals; track idx; let idx = $index) {
          @if (idx < maxArrivalsShown) {
            <app-train-arrival-details [content]="arrival" />
          }
        } @empty {
          <div class="pb-12 px-4 rounded-md">
            <core-info-message [content]="messaging" />
          </div>
        }
      } @loading (minimum 800ms) {
        <core-loading-skeleton loadingItem="header" />
        <core-loading-skeleton loadingItem="header" />
      }

      <div class="pt-4 border-t border-t-neutral-400">
        <div class="flex justify-between text-center">
          <span class="text-neutral-900  font-medium text-4"> View All Arrivals </span>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="w-5"
              fill="none">
              <path
                d="M8.29289 4.29289C7.90237 4.68342 7.90237 5.31658 8.29289 5.70711L14.5858 12L8.29289 18.2929C7.90237 18.6834 7.90237 19.3166 8.29289 19.7071C8.68342 20.0976 9.31658 20.0976 9.70711 19.7071L16.7071 12.7071C17.0976 12.3166 17.0976 11.6834 16.7071 11.2929L9.70711 4.29289C9.31658 3.90237 8.68342 3.90237 8.29289 4.29289Z"
                class="fill-neutral-900" />
            </svg>
          </div>
        </div>
      </div>
    </article>
  `,
})
export class StationTrainArrivalCardComponent {
  @Input() content: StationTrainArrivalCard = {} as StationTrainArrivalCard;
  @Output() saveEmitter = new EventEmitter<{ name: string; isSaved: boolean }>();

  messaging: Header = STATION_TRAIN_ARRIVAL_CARD_MESSAGING;
  expand: boolean = false;
  maxArrivalsShown = 5;

  constructor(private router: Router) {}

  /**
   * Rather than using [routerLink]="content.link.url" on the actual card, we are
   * using Router to navigate to the station details page. This is because the card is
   * clickable anywhere on the card, and we want to avoid the card being clickable when
   * the user clicks on the bookmark / saved button.
   **/
  navigateToStationDetails() {
    this.router.navigate([this.content.link.url]);
  }

  toggleSaved(event: Event) {
    event.stopPropagation();
    this.content.isSaved = !this.content.isSaved;
    this.saveEmitter.emit({ name: this.content.header.title, isSaved: this.content.isSaved });
  }
}
