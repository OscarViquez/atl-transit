import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-card',
   standalone: true,
   imports: [CommonModule],
   template: `<p>card works!</p>`,
   styleUrls: ['./card.component.scss']
})
export class CardComponent {}
