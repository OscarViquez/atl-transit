import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BadgeVariant } from './types/badge.type';
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
