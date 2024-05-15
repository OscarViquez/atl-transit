import { Component, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CloseIconComponent } from '../../icons/close-icon.component';

@Component({
   selector: 'shared-modal',
   standalone: true,
   imports: [CommonModule, CloseIconComponent],
   template: `
      @if (isOpen) {
         <div class="overlay-full">
            <section
               class="modal md:h-4/5 md:max-w-[736px] rounded-none"
               [ngClass]="{ 'top-10 sm:rounded-2xl': isBottomSheet }"
            >
               <div class="ml-auto pb-6">
                  <button (click)="closeModal()">
                     <shared-icon-close />
                  </button>
               </div>
               <div class="overflow-y-auto scrollbar-hide pb-8">
                  <ng-content>
                     <!-- This is where the modal content goes -->
                  </ng-content>
               </div>
            </section>
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
    * The `elementRef` property is used to access the DOM element of this component.
    * It is injected into the constructor by Angular's dependency injection system.
    */
   constructor(private elementRef: ElementRef) {}

   /**
    * The `ngOnChanges` method is called whenever the value of an @Input property changes.
    * It is used to detect when the `isOpen` property changes and to fade in the modal.
    * It uses the `fadeIn` function from `modal.interactions.ts` to animate the modal.
    */
   // ngOnChanges(changes: SimpleChanges): void {
   //    if (changes['isOpen'] && changes['isOpen'].currentValue) {
   //       fadeIn(this.elementRef.nativeElement);
   //    }
   // }

   /**
    * The `closeModal` method is called to close the modal.
    * It emits the `modalChange` event with a value of `false` and sets `isOpen` to `false`.
    */
   closeModal() {
      this.modalChange.emit(false);
      this.isOpen = false;
   }
}
