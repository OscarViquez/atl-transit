import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SearchListItem } from '../../interfaces/search.interfaces';
import { BadgeComponent } from '@atl-transit/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-search-result-item',
  standalone: true,
  imports: [CommonModule, BadgeComponent, RouterModule],
  template: `
    <a role="link" [routerLink]="this.content.url" class="cursor-pointer">
      <li
        class="list-none flex items-center gap-3 px-2 py-3 rounded-lg transition-all duration-200 border border-white hover:bg-neutral-100 focus:outline-link">
        <div class="h-10 w-10 border border-neutral-500 rounded-md"></div>
        <div class="flex flex-col justify-center flex-1">
          <div class="flex gap-2">
            <p class="text-4 font-medium">{{ content.name }}</p>
            @if (content.badgeLabel) {
              <span class="text-4 font-medium"> · </span>
              <core-badge>{{ content.badgeLabel }}</core-badge>
            }
          </div>
          <div>
            <p class="text-4 font-normal">{{ content.description }}</p>
          </div>
        </div>
      </li>
    </a>
  `,
})
export class SearchResultItemComponent {
  @Input() content: SearchListItem = {} as SearchListItem;

  // navigateToStationDetails() {
  //   this.router.navigate([this.content.url]);
  // }
}
