import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'core-test-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- * Modal -->
    @if (isOpen) {
      <dialog
        #modal
        [ngClass]="{
          'top-10 rounded-2xl': isBottomSheet,
          'animate-modal': !isBottomSheet && isOpen,
          'animate-bottom-sheet-up md:animate-modal': isBottomSheet && isOpen,
        }">
        <div
          class="modal z-50 h-screen md:h-4/5 md:max-w-[736px] overflow-hidden"
          [ngClass]="{
            'top-10 rounded-2xl': isBottomSheet,
            'animate-modal': !isBottomSheet && isOpen,
            'animate-bottom-sheet-up md:animate-modal': isBottomSheet && isOpen,
          }">
          hello
        </div>
        <!-- <div class="ml-auto pb-6 pr-6">
              <button
                class="grid place-content-center h-10 w-10
                   bg-neutral-100 border border-neutral-100 rounded-full transition-all ease-linear duration-100 
                  hover:bg-neutral-400 focus:outline focus:outline-white focus:outline-2 focus:shadow-focused-state"
                (click)="closeModal(modal)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none">
                  <path
                    d="M0.113847 0.235191L0.170067 0.170067C0.376209 -0.0360748 0.698787 -0.0548149 0.9261 0.113847L0.991223 0.170067L6 5.17858L11.0088 0.170067C11.2355 -0.056689 11.6032 -0.056689 11.8299 0.170067C12.0567 0.396823 12.0567 0.764467 11.8299 0.991223L6.82142 6L11.8299 11.0088C12.0361 11.2149 12.0548 11.5375 11.8862 11.7648L11.8299 11.8299C11.6238 12.0361 11.3012 12.0548 11.0739 11.8862L11.0088 11.8299L6 6.82142L0.991223 11.8299C0.764467 12.0567 0.396823 12.0567 0.170067 11.8299C-0.056689 11.6032 -0.056689 11.2355 0.170067 11.0088L5.17858 6L0.170067 0.991223C-0.0360748 0.785082 -0.0548149 0.462503 0.113847 0.235191L0.170067 0.170067L0.113847 0.235191Z"
                    fill="#484848" />
                </svg>
              </button>
            </div>
            <div class="overflow-y-scroll scrollbar-hide pb-8">
              <ng-content> </ng-content>
            </div> -->

        <!-- <button class="btn btn-secondary" (click)="closeModal(modal)">Go now</button>
            <button class="btn btn-primary" autofocus (click)="closeModal(modal)">Close now</button> -->
      </dialog>
      <button class="mx-auto btn btn-secondary" (click)="openModal(modal)">Show the dialog</button>
    }
  `,
})
export class TestModalComponent {
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

  openModal(modal: HTMLDialogElement) {
    modal.showModal();
  }

  closeModal(modal: HTMLDialogElement) {
    modal.close();
    this.modalChange.emit(false);
    this.isOpen = false;
  }
}
