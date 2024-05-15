import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeColor } from '../../models';

@Component({
   selector: 'shared-badge',
   standalone: true,
   imports: [CommonModule],
   template: ` <span
      role="status"
      aria-label="badge"
      class="badge badge--{{ color }} badge--radius-{{ radius }}"
   >
      <ng-content></ng-content>
   </span>`,
   styleUrl: './badge.component.scss'
})
export class BadgeComponent {
   @Input() color: BadgeColor = 'gray';
   @Input() radius: 'default' | 'pill' = 'default';
}
