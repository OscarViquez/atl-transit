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
      <div #stationMapModal class="h-dvh">
        <div class="flex flex-col gap-6 text-center mt-[10rem]">
          @defer (on viewport(stationMapModal)) {
            <img
              src="/assets/images/apple-maps-icon.png"
              class="h-[56px] w-[56px] mx-auto"
              alt="apple icon" />

            <h2 class="text-6 font-semibold ">Something went wrong while loading</h2>
            <p class="text-4 font-medium text-neutral-800  animate-fade-up">
              We are working hard to get the maps for this station. Please check back later for
              updates.
            </p>
          } @loading (minimum 2000ms) {
            <core-loading-skeleton loadingItem="header" />
            <div class="px-4">
              <core-loading-skeleton loadingItem="image" />
            </div>
          }
        </div>
      </div>
    </core-modal>
  `,
})
export class StationMapViewModalComponent {
  @Input() isModalOpen!: boolean;
  @Output() modalChange = new EventEmitter<boolean>();
}
