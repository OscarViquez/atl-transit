import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '@atl-transit/shared';
import { CardInputFormComponent } from '../../ui/card-input-form/card-input-form.component';

@Component({
   selector: 'app-view-card-modal',
   standalone: true,
   imports: [CommonModule, CardInputFormComponent, ModalComponent],
   template: `
      <shared-modal
         [isOpen]="openModal"
         [isBottomSheet]="false"
         (modalChange)="onModalCloseEvent($event)"
      >
         <div class="px-6">
            <app-card-input-form title="View Breeze Card Balance" />

            <button class="btn btn-primary w-full my-8">View Balance</button>

            <section class="flex flex-col gap-6 py-6 border-t-neutral-500 border-t">
               <div>
                  <h3 class="text-5 font-medium text-black mb-2">
                     Where to Find Your Serial Number
                  </h3>
                  <p class="text-4 font-medium text-neutral-800">
                     The serial number is located on the back of your card, usually near the bottom.
                  </p>
               </div>
               <div class="bg-primary bg-opacity-10 rounded-md h-[9.125rem]"></div>
            </section>
         </div>
      </shared-modal>
   `
})
export class ViewCardModalComponent {
   @Input() openModal = false;

   @Output() modalChange = new EventEmitter<boolean>();

   onModalCloseEvent(value: boolean): void {
      this.modalChange.emit(value);
   }
}
