import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-badge',
   standalone: true,
   imports: [CommonModule],
   template: `<p>badge works!</p>`,
   styleUrls: ['./badge.component.scss']
})
export class BadgeComponent {}
