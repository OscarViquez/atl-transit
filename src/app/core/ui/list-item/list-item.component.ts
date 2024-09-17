import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { ListItem } from '../../models';

@Component({
  selector: 'core-list-item',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  template: `
    <li
      class="list-none flex items-center gap-3 px-2 border-b pb-4 border-b-neutral-400"
      [ngClass]="{ 'pt-4': !isFirstIndex }">
      <div class="h-10 w-10 bg-neutral-400 rounded-md"></div>
      <div class="flex flex-col justify-center flex-1">
        <div class="flex gap-2">
          <p class="text-4 font-semibold">{{ content.name }}</p>
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
  `,
})
export class ListItemComponent {
  @Input() content: ListItem = {} as ListItem;
  @Input() isFirstIndex: boolean = false;
}
