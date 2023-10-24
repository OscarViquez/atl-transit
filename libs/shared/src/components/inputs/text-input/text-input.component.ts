import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-text-input',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './text-input.component.html',
   styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent {
   @Input() label!: string;
}
