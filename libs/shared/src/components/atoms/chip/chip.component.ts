import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-chip',
   standalone: true,
   imports: [CommonModule],
   template: `<p>chip works!</p>`,
   styleUrls: ['./chip.component.scss']
})
export class ChipComponent {}
