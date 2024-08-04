import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { TrainArrivalDetailsComponent } from '../train-arrival-details/train-arrival-details.component';
import { HeaderComponent, SaveButtonComponent } from '../../ui';
import { StationTrainArrivalCard } from '../../models';

@Component({
  selector: 'app-station-train-arrival-card',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    TrainArrivalDetailsComponent,
    HeaderComponent,
    SaveButtonComponent,
  ],
  template: `
    <article role="link" class="card cursor-pointer" (click)="navigateToDetails()" tabindex="0">
      <div class="flex justify-between items-center">
        <core-header [content]="content.header" variant="card" />
        <app-save-button [isSaved]="content.isSaved" (click)="toggleSaved($event)" />
      </div>
      @for (arrival of content.arrivals; track idx; let idx = $index) {
        <app-train-arrival-details [content]="arrival" />
      } @empty {
        <div class="text-center mt-4">
          <p class="text-4 font-medium text-neutral-800">No upcoming arrivals</p>
        </div>
      }
      <div class="sr-only">
        <a [routerLink]="content.link.url">View {{ content.header.title }} station details</a>
      </div>
    </article>
  `,
})
export class StationTrainArrivalCardComponent {
  @Input() content: StationTrainArrivalCard = {} as StationTrainArrivalCard;
  @Output() saveEmitter = new EventEmitter<boolean>();

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
  }

  // TODO: Add logic to delay the saveEmitter event...
  // Because we want to give users a chance to cancel the save action
  // This can also provide a smoother, less choppy experience
}
