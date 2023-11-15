import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'rya-accordian',
   standalone: true,
   imports: [CommonModule],
   template: `<p>accordian works!</p>`,
   styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent {}
