import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'shared-modal',
   standalone: true,
   imports: [CommonModule],
   template: `
      @if (isOpen) {
         <div class="overlay-full overflow">
            <dialog
               tabindex="1"
               class="modal md:h-4/5 md:max-w-[736px] overflow-hidden"
               [ngClass]="{
                  'top-10 rounded-2xl': isBottomSheet,
                  'animate-modal': !isBottomSheet && isOpen,
                  'animate-bottom-sheet-up md:animate-modal': isBottomSheet && isOpen
               }"
            >
               <div class="ml-auto pb-6">
                  <button
                     class="grid place-content-center h-8 w-8 bg-[#F2F2F2] border border-[#F2F2F2] rounded-md"
                     (click)="closeModal()"
                  >
                     <div class="after:content-dismiss-filled w-5 h-5"></div>
                  </button>
               </div>
               <div class="overflow-y-scroll scrollbar-hide pb-8">
                  <ng-content>
                     <!-- This is where the modal content goes -->
                  </ng-content>
               </div>
            </dialog>
         </div>
      }
   `
})
export class ModalComponent {
   /**
    * The `isOpen` property determines the current state of the modal.
    * It can be used by a parent component to set the initial state of the modal.
    * It is an @Input property, meaning it can be bound to a property of a parent component.
    */
   @Input() isOpen = false;

   /**
    * The `isBottomSheet` property determines if the modal is a bottom sheet.
    * It can be used by a parent component to set the modal as a bottom sheet.
    */
   @Input() isBottomSheet = true; // New input property

   /**
    * The `modalChange` event is emitted whenever the modal is closed.
    * It emits a boolean value representing the new state of the modal.
    * It is an @Output property, meaning a parent component can listen for this event.
    */
   @Output() modalChange = new EventEmitter<boolean>();

   /**
    * The `closeModal` method is called to close the modal.
    * It emits the `modalChange` event with a value of `false` and sets `isOpen` to `false`.
    */
   closeModal() {
      this.modalChange.emit(false);
      this.isOpen = false;
   }
}
