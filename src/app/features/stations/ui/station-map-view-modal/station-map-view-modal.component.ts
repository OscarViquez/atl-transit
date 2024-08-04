import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '@atl-transit/core';

@Component({
  selector: 'app-station-map-view-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    <!-- <main
      class="hidden xl:flex flex-col gap-12 mx-auto w-full relative rounded-lg animate-overlay-enter">
      <div class="sticky top-8 bottom-0 z-10 h-[94vh] w-full rounded-lg bg-primary overflow-hidden">
        <div class="h-full"></div>
      </div>
    </main> -->

    <core-modal
      [isOpen]="isModalOpen"
      [hasPadding]="true"
      (modalChange)="this.modalChange.emit($event)">
      <div class="h-dvh">
        <img src="/assets/images/apple-map-icon.png" class="h-full object-cover" alt="" />
      </div>
    </core-modal>
  `,
})
export class StationMapViewModalComponent {
  @Input() isModalOpen!: boolean;
  @Output() modalChange = new EventEmitter<boolean>();
}
