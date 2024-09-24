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
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none">
            <path
              d="M0.469673 15.7803C0.176784 15.4874 0.176784 15.0126 0.469673 14.7197L7.18934 8L0.469673 1.28033C0.176784 0.987437 0.176784 0.512563 0.469673 0.21967C0.762563 -0.0732233 1.23744 -0.0732233 1.53033 0.21967L8.78033 7.46967C9.07322 7.76256 9.07322 8.23744 8.78033 8.53033L1.53033 15.7803C1.23744 16.0732 0.762563 16.0732 0.469673 15.7803Z"
              fill="#484848" />
          </svg>
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
