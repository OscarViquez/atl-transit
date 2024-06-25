import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
   BadgeComponent,
   HeaderComponent,
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
      BadgeComponent,
      HeaderComponent
   ],
   selector: 'app-showcase',
   template: `
      <main class="preview-page">
         <!-- <shared-search-bar placeholder="Try Searching 'Doraville Station'" [interactive]="false" />
         <shared-search-bar placeholder="Try Searching 'Doraville Station'" [interactive]="true" />

         <shared-badge [color]="'white'"> Status </shared-badge>

         <shared-badge> Status </shared-badge> -->

         <!-- <shared-header
            [content]="{ title: 'Card Header Title', description: 'Header Description' }"
            variant="card"
         /> -->

         <!-- <button class="btn btn-primary" (click)="openModal = true">Open Modal</button> -->

         <shared-modal
            [isOpen]="openModal"
            [isBottomSheet]="false"
            (modalChange)="onModalChange($event)"
            class="scrollbar-hide"
         >
            <div class="text-center">
               <h2 class="text-6 font-semibold mb-4">My Modal</h2>
               <p class="text-4 font-medium text-neutral02">
                  You have successfully created a modal component using the shared library.
               </p>
            </div>
         </shared-modal>
      </main>
   `
})
export class ShowcaseComponent {
   openModal = false;

   onModalChange(open: boolean) {
      this.openModal = open;
   }
}
