import { CommonModule } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { SearchBarComponent } from '@atl-transit/core';
import { SearchOverlayComponent } from '../../ui/search-overlay/search-overlay.component';
import { SearchResults } from '../../interfaces/search.interfaces';
import { SEARCH_RESULTS_LIST } from '../../constants/search.constants';
import { FilterSearchResultsPipe } from '../../pipe/filter-search-results.pipe';
import { FacadeService } from '@atl-transit/data-access';

@Component({
  selector: 'app-search-widget',
  standalone: true,
  imports: [CommonModule, SearchOverlayComponent, SearchBarComponent, FilterSearchResultsPipe],
  template: `
    <div class="hidden md:block">
      <div class="relative">
        <core-search-bar
          [interactive]="true"
          [placeholder]="'Try Searching Doraville Station'"
          (queryEmitter)="query = $event"
          (click)="toggleOverlay(true)"
          [ngClass]="{
            'relative inset-0 z-50': isOverlayOpen,
          }" />

        @if (isOverlayOpen) {
          <div class="search-backdrop-transparent-overlay" (click)="toggleOverlay(false)">
            <!-- Transparent Overlay that goes behind the search bar and search overlay -->
          </div>

          <app-search-overlay
            class="md:absolute md:inset-0 md:top-14 md:z-50"
            [isWidget]="true"
            [searchResults]="searchResults | filterSearchResults: query"
            [ngClass]="{
              hidden: !isOverlayOpen,
              'block animate-modal': isOverlayOpen,
            }"
            (closeEmmiter)="toggleOverlay($event)" />
        }
      </div>
    </div>
  `,
})
export class SearchWidgetComponent implements OnInit {
  isOverlayOpen = false;
  searchResults: SearchResults[] = SEARCH_RESULTS_LIST;
  query: string = '';

  constructor(
    private facade: FacadeService,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.searchResults = this.facade.fetchSearchResultsList();
  }

  toggleOverlay(isOpen: boolean) {
    this.isOverlayOpen = isOpen;
    this.updateBodyClass();
  }

  private updateBodyClass() {
    if (this.isOverlayOpen) {
      this.renderer.addClass(document.body, 'scroll-locked');
    } else {
      this.renderer.removeClass(document.body, 'scroll-locked');
    }
  }
}
