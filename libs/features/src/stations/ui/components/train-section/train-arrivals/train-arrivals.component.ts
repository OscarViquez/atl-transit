import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   PaginationButtonMocks,
   TrainPageConfig,
   TrainPageContent,
   TrainStation
} from '../../../../shared';
import { StationCardComponent } from '../../../components';
import { LoadingSkeletonComponent, ThemeButtonComponent } from '@atl-transit/shared';

@Component({
   selector: 'rya-train-arrivals',
   standalone: true,
   imports: [CommonModule, StationCardComponent, LoadingSkeletonComponent, ThemeButtonComponent],
   templateUrl: './train-arrivals.component.html',
   styleUrl: './train-arrivals.component.scss'
})
export class TrainArrivalsComponent {
   @Input() loading!: boolean | null;
   @Input() trainData!: TrainStation[] | null;
   @Input() content!: TrainPageContent;
   @Input() config!: TrainPageConfig;
   buttonProps = PaginationButtonMocks;

   filterData(data: TrainStation[] | null): TrainStation[] {
      if(data) return data?.slice(0, 2);
      else return [];
   }

   scroll(direction: number): void {
      const container = document.querySelector('.train-arrivals__cards');
      const scrollAmount = direction * 400; // adjust as needed
      container?.scrollBy({ left: scrollAmount, behavior: 'smooth' });
   }
}
