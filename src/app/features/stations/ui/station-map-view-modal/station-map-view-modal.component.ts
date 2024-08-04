import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '@atl-transit/core';

@Component({
  selector: 'app-station-map-view-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    <core-modal
      [isOpen]="isModalOpen"
      [hasPadding]="true"
      (modalChange)="this.modalChange.emit($event)">
      <div class="h-dvh">
        <div class="flex flex-col gap-6 text-center mt-[10rem]">
          <img
            src="/assets/images/apple-maps-icon.png"
            class="h-[56px] w-[56px] mx-auto"
            alt="apple icon" />

          <h2 class="text-6 font-semibold">We don't have the schedule for this station yet.</h2>
          <p class="text-4 font-medium text-neutral-800">
            We are working hard to get the schedule for this station. Please check back later for
            updates.
          </p>
        </div>
      </div>
    </core-modal>
  `,
})
export class StationMapViewModalComponent {
  @Input() isModalOpen!: boolean;
  @Output() modalChange = new EventEmitter<boolean>();
}
