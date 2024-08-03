import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeComponent } from '../badge/badge.component';
import { ListItem } from '../../models';

@Component({
  selector: 'core-list-item',
  standalone: true,
  imports: [CommonModule, BadgeComponent],
  template: `
    <div class="flex flex-col py-6 border-b border-b-neutral-400">
      <div class="flex gap-2">
        <p class="text-5 font-semibold">{{ content.name }}</p>
        <span class="text-5 font-semibold"> · </span>
        <core-badge>{{ content.badgeLabel }}</core-badge>
      </div>
      <div>
        <p class="text-4 font-normal">{{ content.description }}</p>
      </div>
    </div>
  `,
})
export class ListItemComponent {
  @Input() content: ListItem = {} as ListItem;
}
