import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { STATION_DETAILS_PAGE_HEADER } from '../../constants/station-details-page.constants';
import { Header, LoadingSkeletonComponent, SaveButtonComponent } from '@atl-transit/core';

@Component({
  selector: 'app-station-details-header',
  standalone: true,
  imports: [CommonModule, SaveButtonComponent, LoadingSkeletonComponent],
  template: `
    <!-- Station Details Header -->
    <section class="flex flex-col gap-4 animate-fade-up">
      <div class="header header--page gap-6">
        <div class="flex relative pr-12">
          <h2 class="header__title tracking-normal pr-2">{{ content.title }}</h2>
          <app-save-button class="absolute right-0" [isSaved]="isSaved" (click)="toggleSaved()" />
        </div>
        <p class="header__subtitle">
          {{ expand ? content.description : (content.description | slice: 0 : 184) + '...' }}
        </p>
      </div>

      <button
        class="px-6 py-3 w-full lg:w-fit font-medium text-4 text-center bg-neutral-200 rounded-lg transition-all ease-linear duration-100 hover:bg-neutral-500 active:scale-[.97]"
        (click)="expandDescription()">
        Read
        {{ expand ? 'Less' : 'More' }}
      </button>
    </section>
  `,
})
export class StationDetailsHeaderComponent {
  @Input() content: Header = STATION_DETAILS_PAGE_HEADER;
  @Input() isSaved!: boolean;
  @Output() saveEmitter = new EventEmitter<{ name: string; isSaved: boolean }>();

  expand: boolean = false;

  toggleSaved() {
    this.isSaved = !this.isSaved;
    this.saveEmitter.emit({ name: this.content.title, isSaved: this.isSaved });
  }

  expandDescription() {
    this.expand = !this.expand;
  }
}
