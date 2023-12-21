import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationCardComponent } from '../../station-card/station-card.component';
import { TrainPageConfig, TrainPageContent } from '../../../../shared';

@Component({
   selector: 'rya-saved-arrivals',
   standalone: true,
   imports: [CommonModule, StationCardComponent],
   templateUrl: './saved-arrivals.component.html',
   styleUrl: './saved-arrivals.component.scss'
})
export class SavedArrivalsComponent {
   @Input() content!: TrainPageContent;
   @Input() config!: TrainPageConfig;
}
