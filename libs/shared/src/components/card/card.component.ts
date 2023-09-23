import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-card',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './card.component.html',
   styleUrls: ['./card.component.scss']
})
export class CardComponent {}
