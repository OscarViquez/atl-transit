import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainPageConfig, TrainPageContent, TrainStation } from '../../../shared';
import { TrainArrivalsComponent } from './train-arrivals/train-arrivals.component';
import { SavedArrivalsComponent } from './saved-arrivals/saved-arrivals.component';

@Component({
   selector: 'rya-train-section',
   standalone: true,
   imports: [CommonModule, TrainArrivalsComponent, SavedArrivalsComponent],
   templateUrl: './train-section.component.html',
   styleUrl: './train-section.component.scss'
})
export class TrainSectionComponent {
   @Input() loading!: boolean;
   @Input() trainData!: TrainStation[] | null;
   @Input() content!: TrainPageContent;
   @Input() config!: TrainPageConfig;
}
