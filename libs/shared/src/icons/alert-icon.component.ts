import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'shared-icon-alert',
   standalone: true,
   imports: [CommonModule],
   template: `
      @if (filled) {
      } @else {}
   `
})
export class AlertIconComponent {
   @Input() color = '#1F1F1F';
   @Input() filled = false;
}
