import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STATION_DETAILS_PAGE_HEADER } from '../../constants/station-details-page.constants';
import { Header, SaveButtonComponent } from '@atl-transit/core';

@Component({
  selector: 'app-station-details-header',
  standalone: true,
  imports: [CommonModule, SaveButtonComponent],
  template: `
    <!-- Station Details Header -->
    <section class="flex flex-col gap-4">
      <div class="header header--page gap-6">
        <div class="flex relative pr-12">
          <h2 class="header__title tracking-normal">{{ content.title }}</h2>
          <app-save-button class="absolute right-0" [isSaved]="isSaved" (click)="onSaveChange()" />
        </div>
        <p class="header__subtitle">{{ content.description }}</p>
      </div>
    </section>
  `,
})
export class StationDetailsHeaderComponent {
  @Input() content: Header = STATION_DETAILS_PAGE_HEADER;

  @Input() isSaved!: boolean;

  onSaveChange() {
    this.isSaved = !this.isSaved;
  }
}
