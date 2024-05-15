import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-train-page',
   standalone: true,
   imports: [CommonModule],
   template: `<p>train-page works!</p>`,
   styleUrl: './train-page.component.scss'
})
export class TrainPageComponent {}
