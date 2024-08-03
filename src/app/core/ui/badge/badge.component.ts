import { Component, Input } from '@angular/core';

import { BadgeColor } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'core-badge',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      role="status"
      aria-label="badge"
      class="badge"
      [ngClass]="{
        'badge-gold': color === 'gold',
        'badge-red': color === 'red',
        'badge-green': color === 'green',
        'badge-blue': color === 'blue',
        'badge-gray': color === 'gray',
        'badge-black': color === 'black',
        'badge-white': color === 'white',
      }">
      <ng-content></ng-content>
    </div>
  `,
})
export class BadgeComponent {
  @Input() color: BadgeColor = 'gray';
}
