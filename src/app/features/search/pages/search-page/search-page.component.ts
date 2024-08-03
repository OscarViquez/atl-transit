import { Component } from '@angular/core';
import { SearchBarComponent } from '@atl-transit/core';
import { CommonModule } from '@angular/common';
import { SearchOverlayComponent } from '../../containers';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [CommonModule, SearchOverlayComponent, SearchBarComponent],
  template: `
    <div class="md:hidden">
      <div class="relative">
        <core-search-bar
          [interactive]="true"
          [placeholder]="'Try Searching Doraville Station'"
          [ngClass]="{
            'relative inset-0 z-50': isOverlayOpen,
          }"
          (click)="toggleOverlay(true)" />
        <app-search-overlay />
      </div>
    </div>
  `,
})
export class SearchPageComponent {
  isOverlayOpen = false;

  toggleOverlay(isOpen: boolean) {
    this.isOverlayOpen = isOpen;
  }
}
