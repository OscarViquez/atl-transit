import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'shared-icon-info',
   standalone: true,
   imports: [CommonModule],
   template: `
      @if (filled) {
      } @else {}
   `
})
export class InfoIconComponent {
   @Input() color = '#1F1F1F';
   @Input() filled = false;
}
