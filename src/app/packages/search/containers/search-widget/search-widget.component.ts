import { Component, Input } from '@angular/core';
import { SearchBarComponent } from '@atl-transit/core';
import { CommonModule } from '@angular/common';
import { SearchOverlayComponent } from '../search-overlay/search-overlay.component';

@Component({
  selector: 'app-search-widget',
  standalone: true,
  imports: [CommonModule, SearchOverlayComponent, SearchBarComponent],
  template: `
    <div class="hidden md:block">
      <div class="relative">
        <core-search-bar
          [interactive]="true"
          [placeholder]="'Try Searching Doraville Station'"
          [ngClass]="{
            'relative inset-0 z-50': isOverlayOpen,
          }"
          (click)="toggleOverlay(true)" />

        @if (isOverlayOpen) {
          <div class="search-backdrop-transparent-overlay" (click)="toggleOverlay(false)">
            <!-- Transparent Overlay that goes behind the search bar and search overlay -->
          </div>

          <app-search-overlay
            [isAlwaysFlexColumn]="hasSmallOverlay"
            class="search-overlay"
            [ngClass]="{
              hidden: !isOverlayOpen,
              'block animate-modal': isOverlayOpen,
            }" />
        }
      </div>
    </div>
  `,
})
export class SearchWidgetComponent {
  @Input() hasSmallOverlay: boolean = false;

  isOverlayOpen = false;

  toggleOverlay(isOpen: boolean) {
    this.isOverlayOpen = isOpen;
  }
}
