import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent, LoadingSkeletonComponent } from '@atl-transit/shared';

@Component({
   selector: 'rya-train-journey',
   standalone: true,
   imports: [CommonModule, IconComponent, LoadingSkeletonComponent],
   templateUrl: './train-journey.component.html',
   styleUrl: './train-journey.component.scss'
})
export class TrainJourneyComponent {
   @Input() loading!: boolean | null;  
}
