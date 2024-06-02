import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   BadgeComponent,
   LoadingSkeletonComponent,
   ModalComponent,
   SearchBarComponent
} from '@atl-transit/shared';
@Component({
   standalone: true,
   imports: [
      CommonModule,
      ModalComponent,
      SearchBarComponent,
      LoadingSkeletonComponent,
      BadgeComponent
   ],
   selector: 'app-showcase',
   template: `
      <main class="preview-page">
         <shared-search-bar placeholder="Try Searching 'Doraville Station'" [interactive]="false" />
         <shared-search-bar placeholder="Try Searching 'Doraville Station'" [interactive]="true" />

         <shared-badge [color]="'white'"> Status </shared-badge>

         <shared-badge> Status </shared-badge>

         <!-- <shared-modal
            [isOpen]="openModal"
            [isBottomSheet]="false"
            (modalChange)="onModalChange($event)"
            class="scrollbar-hide"
         >
            <div class="input input-disabled relative">
               <input type="text" class="block" placeholder="XXX-XXX-XXX-XXX" />
               <label>Label</label>
            </div>

            <button class="btn btn-primary btn-fill">Save</button>
            <button class="btn btn-primary">Save</button>
         </shared-modal> -->
      </main>
   `
})
export class ShowcaseComponent {
   openModal = false;

   onModalChange(open: boolean) {
      this.openModal = open;
   }
}
