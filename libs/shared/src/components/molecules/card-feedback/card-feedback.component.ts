import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFeedback } from './models/card-feedback.interface';
import { IconComponent } from '../../atoms';

@Component({
   selector: 'rya-card-feedback',
   standalone: true,
   imports: [CommonModule, IconComponent],
   templateUrl: './card-feedback.component.html',
   styleUrls: ['./card-feedback.component.scss']
})
export class CardFeedbackComponent {
   @Input() content!: CardFeedback;
}
