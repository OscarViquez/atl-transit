import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-items',
   standalone: true,
   imports: [CommonModule],
   template: `<p>items works!</p>`,
   styleUrls: ['./items.component.scss']
})
export class ItemsComponent {}
