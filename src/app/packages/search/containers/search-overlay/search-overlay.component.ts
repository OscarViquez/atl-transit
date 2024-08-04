import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TileComponent } from '@atl-transit/core';

@Component({
  selector: 'app-search-overlay',
  standalone: true,
  imports: [CommonModule, TileComponent],
  template: `
    <div
      class="flex flex-col gap-6 py-8 md:px-6 md:border md:border-neutral-400 md:shadow-card md:rounded-lg mt-2 bg-white">
      <section>
        <h2 class="text-6 font-semibold text-neutral-900 mb-4">Quick Search</h2>
        <div
          class="flex flex-col gap-4 lg:flex-row"
          [ngClass]="{
            'lg:flex-col': isAlwaysFlexColumn,
          }">
          <core-tile class="flex-1">
            Show all <br />
            stations
          </core-tile>
          <core-tile class="flex-1">
            Track my
            <br />train location
          </core-tile>
          <core-tile class="flex-1">
            Show all
            <br />stations
          </core-tile>
        </div>
      </section>
    </div>
  `,
})
export class SearchOverlayComponent {
  @Input() isAlwaysFlexColumn: boolean = false;
  @Output() closeOverlay = new EventEmitter<boolean>();
}
