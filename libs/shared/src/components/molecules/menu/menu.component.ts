import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-menu',
   standalone: true,
   imports: [CommonModule],
   template: `<p>menu works!</p>`,
   styleUrls: ['./menu.component.scss']
})
export class MenuComponent {}
