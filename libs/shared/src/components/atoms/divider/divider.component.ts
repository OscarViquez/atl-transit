import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-divider',
   standalone: true,
   imports: [CommonModule],
   template: `<p>divider works!</p>`,
   styleUrls: ['./divider.component.scss']
})
export class DividerComponent {}
