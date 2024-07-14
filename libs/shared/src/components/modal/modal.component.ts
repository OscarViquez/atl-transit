import {
   Component,
   EventEmitter,
   Input,
   OnChanges,
   OnDestroy,
   OnInit,
   Output,
   Renderer2,
   SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'shared-modal',
   standalone: true,
   imports: [CommonModule],
   template: `
      @if (isOpen) {
         <div class="overlay-full overflow z-50">
            <dialog
               class="modal h-screen md:h-4/5 md:max-w-[736px] overflow-hidden"
               [ngClass]="{
                  'top-10 rounded-2xl': isBottomSheet,
                  'animate-modal': !isBottomSheet && isOpen,
                  'animate-bottom-sheet-up md:animate-modal': isBottomSheet && isOpen
               }"
            >
               <div class="ml-auto pb-6 pr-6">
                  <button
                     class="grid place-content-center h-8 w-8 bg-neutral-100 border border-neutral-100 rounded-full"
                     (click)="closeModal()"
                  >
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                     >
                        <path
                           d="M0.113847 0.235191L0.170067 0.170067C0.376209 -0.0360748 0.698787 -0.0548149 0.9261 0.113847L0.991223 0.170067L6 5.17858L11.0088 0.170067C11.2355 -0.056689 11.6032 -0.056689 11.8299 0.170067C12.0567 0.396823 12.0567 0.764467 11.8299 0.991223L6.82142 6L11.8299 11.0088C12.0361 11.2149 12.0548 11.5375 11.8862 11.7648L11.8299 11.8299C11.6238 12.0361 11.3012 12.0548 11.0739 11.8862L11.0088 11.8299L6 6.82142L0.991223 11.8299C0.764467 12.0567 0.396823 12.0567 0.170067 11.8299C-0.056689 11.6032 -0.056689 11.2355 0.170067 11.0088L5.17858 6L0.170067 0.991223C-0.0360748 0.785082 -0.0548149 0.462503 0.113847 0.235191L0.170067 0.170067L0.113847 0.235191Z"
                           fill="#484848"
                        />
                     </svg>
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
export class ModalComponent implements OnInit, OnDestroy, OnChanges {
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

   // Inject the Renderer2 service to manipulate the DOM
   constructor(private renderer: Renderer2) {}

   // We are calling the `updateBodyClass` method when the component is initialized and when the `isOpen` property changes.
   ngOnInit() {
      this.updateBodyClass();
   }

   /**
    * The `ngOnChanges` lifecycle hook is called whenever an input property changes.
    * We are using it to call the `updateBodyClass` method whenever the `isOpen` property changes.
    * @param changes - An object containing the changed properties
    */
   ngOnChanges(changes: SimpleChanges) {
      if (changes['isOpen']) {
         this.updateBodyClass();
      }
   }

   /**
    * The `ngOnDestroy` lifecycle hook is called when the component is destroyed.
    * We are using it to remove the `overflow-hidden` class from the body element.
    */
   ngOnDestroy() {
      // Ensure the class is removed when the component is destroyed
      this.renderer.removeClass(document.body, 'overflow-hidden');
   }

   /**
    * The `closeModal` method is called to close the modal.
    * It emits the `modalChange` event with a value of `false` and sets `isOpen` to `false`.
    */
   closeModal() {
      this.modalChange.emit(false);
      this.isOpen = false;
   }

   /**
    * The `updateBodyClass` method adds the `overflow-hidden` class to the body element when the modal is open.
    * This prevents the body content from scrolling when the modal is open.
    */
   private updateBodyClass() {
      if (this.isOpen) {
         this.renderer.addClass(document.body, 'overflow-hidden');
      } else {
         this.renderer.removeClass(document.body, 'overflow-hidden');
      }
   }
}
