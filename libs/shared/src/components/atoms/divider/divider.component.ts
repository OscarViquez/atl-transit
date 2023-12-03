import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-divider',
   standalone: true,
   imports: [CommonModule],
   template: `<div class="divider">
      <div class="divider__label">{{ label }}</div>
      <div *ngIf="showDivider" class="divider__border"></div>
   </div>`,
   styleUrls: ['./divider.component.scss']
})
export class DividerComponent {
   @Input() label!: string;
   @Input() showDivider!: boolean;
}
