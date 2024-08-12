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
      class="card cursor-pointer animate-fade-up"
      (click)="navigateToDetails()"
      tabindex="0">
      <div class="flex justify-between items-center">
        <core-header [content]="content.header" variant="card" />
        <app-save-button [isSaved]="content.isSaved" (click)="toggleSaved($event)" />
      </div>
      @defer {
        @for (arrival of content.arrivals; track idx; let idx = $index) {
          @if (idx < 3) {
            <app-train-arrival-details [content]="arrival" />
          }
        } @empty {
          <hr class="border-t border-neutral-400" />
          <div class="pb-12 px-4rounded-md">
            <core-info-message [content]="messaging" />
          </div>
        }
      } @loading (minimum 2000ms) {
        <core-loading-skeleton loadingItem="header" />
        <core-loading-skeleton loadingItem="header" />
      }

      <div class="sr-only">
        <a [routerLink]="content.link.url">View {{ content.header.title }} station details</a>
      </div>
    </article>
  `,
})
export class StationTrainArrivalCardComponent {
  @Input() content: StationTrainArrivalCard = {} as StationTrainArrivalCard;

  @Output() saveEmitter = new EventEmitter<{ name: string; isSaved: boolean }>();

  messaging: Header = STATION_TRAIN_ARRIVAL_CARD_MESSAGING;

  /**
   * Rather than using [routerLink]="content.link.url" on the actual card, we are
   * using Router to navigate to the station details page. This is because the card is
   * clickable anywhere on the card, and we want to avoid the card being clickable when
   * the user clicks on the bookmark / saved button.
   **/

  constructor(private router: Router) {}

  navigateToDetails() {
    this.router.navigate([this.content.link.url], { fragment: 'top' });
  }

  toggleSaved(event: Event) {
    event.stopPropagation();
    this.content.isSaved = !this.content.isSaved;
    this.saveEmitter.emit({ name: this.content.header.title, isSaved: this.content.isSaved });
  }

  // TODO: Add logic to delay the saveEmitter event...
  // Because we want to give users a chance to cancel the save action
  // This can also provide a smoother, less choppy experience
}
