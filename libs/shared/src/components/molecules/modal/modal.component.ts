import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-modal',
   standalone: true,
   imports: [CommonModule],
   template: `<p>modal works!</p>`,
   styleUrls: ['./modal.component.scss']
})
export class ModalComponent {}
