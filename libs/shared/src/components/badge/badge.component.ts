import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeColor, BadgeRadius } from '../../models';

@Component({
   selector: 'shared-badge',
   standalone: true,
   imports: [CommonModule],
   template: `
      <span
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
            'badge-pill': radius === 'pill',
            'badge-icon-pill': radius === 'icon'
         }"
      >
         <ng-content></ng-content>
      </span>
   `
})
export class BadgeComponent {
   @Input() color: BadgeColor = 'gray';
   @Input() radius: BadgeRadius = 'default';
}
