import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TileComponent } from '@atl-transit/core';
import { SearchResults } from '../../interfaces/search.interfaces';
import { SearchResultItemComponent } from '../search-result-item/search-result-item.component';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [CommonModule, TileComponent, SearchResultItemComponent],
  template: `
    <div
      class="flex flex-col gap-6 mt-2 md:border md:border-neutral-400 md:shadow-card md:rounded-lg  bg-white"
      [ngClass]="{ 'md:h-[40rem] md:overflow-y-hidden': isWidget }">
      <section class="py-8 md:px-6" [ngClass]="{ 'md:overflow-y-scroll': isWidget }">
        <div class="flex flex-col gap-8">
          @for (
            resultsCatergory of searchResults;
            track idx;
            let idx = $index, f = $first
          ) {
            <article>
              <h3 class="text-6 font-semibold text-neutral-900 mb-4">
                {{ resultsCatergory.catergory }}
              </h3>
              @for (
                resultItem of resultsCatergory.list;
                track idx;
                let idx = $index, f = $first
              ) {
                <app-search-result-item
                  [content]="{
                    name: resultItem.name,
                    badgeLabel: resultItem.badgeLabel,
                    description: resultItem.description,
                    url: resultItem.url,
                  }"
                  (click)="handleCloseOverlay()" />
              }
            </article>
          }
        </div>
      </section>
    </div>
  `,
})
export class SearchOverlayComponent {
  @Input() searchResults: SearchResults[] = [];
  @Input() isWidget: boolean = false;
  @Output() closeEmmiter = new EventEmitter<boolean>();

  handleCloseOverlay() {
    this.closeEmmiter.emit(false);
  }
}
