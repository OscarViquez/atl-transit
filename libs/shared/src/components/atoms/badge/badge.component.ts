import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export type BadgeColors =
   | 'gold'
   | 'red'
   | 'green'
   | 'blue'
   | 'purple'
   | 'orange'
   | 'yellow'
   | 'black'
   | 'white';
@Component({
   selector: 'rya-badge',
   standalone: true,
   imports: [CommonModule],
   template: `<span class="badge badge--{{ color }}"><ng-content></ng-content></span>`,
   styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {
   @Input() color!: string;
}
