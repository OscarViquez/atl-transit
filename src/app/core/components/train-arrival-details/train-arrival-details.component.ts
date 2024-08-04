import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { TrainArrivalDetails } from '../../models';

@Component({
  selector: 'app-train-arrival-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="flex flex-col gap-4 py-2 animate-fade-up">
      <div class="inline-flex items-center gap-3">
        <strong class="text-5 font-medium">{{ content.destination }}</strong>
        <div class="flex-1 border border-dashed border-neutral-400"></div>
        <strong class="text-5 font-medium text-green">{{ content.arrivalTime }}</strong>
      </div>
      <div class="flex justify-between">
        <div class="flex gap-2">
          <span
            class="badge"
            [ngClass]="{
              'badge-gold': content.lineColor === 'gold',
              'badge-red': content.lineColor === 'red',
              'badge-green': content.lineColor === 'green',
              'badge-blue': content.lineColor === 'blue',
            }">
            {{ content.lineColor }}
          </span>
          <span class="badge badge-gray"> {{ content.cardinalDirection }} </span>
        </div>
        <strong class="text-3 font-medium text-neutral-800">
          {{ content.arrivalTimestamp | date }}
        </strong>
      </div>
    </div>
  `,
})
export class TrainArrivalDetailsComponent {
  @Input() content: TrainArrivalDetails = {} as TrainArrivalDetails;
}
