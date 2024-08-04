import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSkeletonComponent, ModalComponent } from '@atl-transit/core';

@Component({
  selector: 'app-station-map-view-modal',
  standalone: true,
  imports: [CommonModule, ModalComponent, LoadingSkeletonComponent],
  template: `
    <core-modal
      [isOpen]="isModalOpen"
      [hasPadding]="true"
      (modalChange)="this.modalChange.emit($event)">
      <div #stationMapModal class="h-dvh grid content-center">
        @defer (on viewport(stationMapModal)) {
          <div class="flex flex-col gap-6 text-center px-4 py-12 h-dvh">
            <h2 class="text-6 font-semibold mt-12">
              Something went wrong <br />
              while loading
            </h2>
            <p class="text-4 font-medium text-neutral-800  animate-fade-up">
              We are working hard to get the maps for this station. Please check back later for
              updates.
            </p>

            <button
              class="btn btn-primary mt-auto animate-fade-up"
              (click)="this.modalChange.emit(false)">
              Close
            </button>
          </div>
        } @loading (minimum 2000ms) {
          <div class="flex flex-col gap-6 text-center px-4 py-12  h-dvh">
            <core-loading-skeleton class="mt-12" />
            <core-loading-skeleton />
            <core-loading-skeleton loadingItem="image" />
            <button class="btn btn-disabled mt-auto">Loading...</button>
          </div>
        }
      </div>
    </core-modal>
  `,
})
export class StationMapViewModalComponent {
  @Input() isModalOpen!: boolean;
  @Output() modalChange = new EventEmitter<boolean>();
}
