import { Component, OnInit, Renderer2 } from '@angular/core';
import { LoadingSkeletonComponent, SearchBarComponent } from '@atl-transit/core';
import { CommonModule } from '@angular/common';
import { SearchResults } from '../../interfaces/search.interfaces';
import { SearchOverlayComponent } from '../../ui/search-overlay/search-overlay.component';
import { FilterSearchResultsPipe } from '../../pipe/filter-search-results.pipe';
import { FacadeService } from '@atl-transit/data-access';

@Component({
  selector: 'app-search-page',
  standalone: true,
  imports: [
    CommonModule,
    SearchBarComponent,
    SearchOverlayComponent,
    FilterSearchResultsPipe,
    LoadingSkeletonComponent,
  ],
  template: `
    <div class="md:hidden mt-10 pt-10 px-6">
      <core-search-bar
        [interactive]="true"
        [placeholder]="'Try Searching Doraville Station'"
        (queryEmitter)="query = $event" />

      <app-search-overlay
        class="animate-fade-up"
        [searchResults]="searchResults | filterSearchResults: query" />
    </div>
  `,
})
export class SearchPageComponent implements OnInit {
  searchResults: SearchResults[] = [];
  query: string = '';

  constructor(private facade: FacadeService) {}

  ngOnInit(): void {
    this.searchResults = this.facade.fetchSearchResultsList();
  }
}
