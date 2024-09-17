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
        <p class="text-center text-neutral-900 underline font-semibold text-4">
          View Arrivals & Station Details
        </p>
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
    this.router.navigate([this.content.link.url], { fragment: 'top' });
  }

  toggleSaved(event: Event) {
    event.stopPropagation();
    this.content.isSaved = !this.content.isSaved;
    this.saveEmitter.emit({ name: this.content.header.title, isSaved: this.content.isSaved });
  }
}
