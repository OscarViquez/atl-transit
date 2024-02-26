import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-toast',
   standalone: true,
   imports: [CommonModule],
   template: `<p>toast works!</p>`,
   styleUrls: ['./toast.component.scss']
})
export class ToastComponent {}
