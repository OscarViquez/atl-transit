import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '@atl-transit/shared';

@Component({
   selector: 'search-modal',
   standalone: true,
   imports: [CommonModule, ModalComponent],
   templateUrl: './search-modal.component.html'
})
export class SearchModalComponent {
   /**
    * @summary The 'openModal' input property controls the initial visibility of the search modal.
    *
    * __Emphasis:__ High emphasis – This property is crucial as it sets the initial state of the search modal's visibility.
    *
    * __Explanation:__ The 'openModal' property is a boolean that determines whether the search modal should be initially shown (`true`) or hidden (`false`).
    *
    * __Example usages:__
    * - This input property is typically set by a parent component that controls the visibility of the search modal.
    */
   @Input() openModal = false;

   /**
    * @summary The 'modalChange' output property emits events when the search modal's visibility changes.
    *
    * __Emphasis:__ High emphasis – This output property is crucial as it allows parent or sibling components to react to changes in the search modal's visibility.
    *
    * __Explanation:__ The 'modalChange' property is an instance of Angular's EventEmitter. It emits a boolean value indicating whether the search modal should be shown (`true`) or hidden (`false`).
    *
    * __Example usages:__
    * - This output property is typically used in conjunction with a method that changes the visibility of the search modal, such as 'onModalCloseEvent'.
    */
   @Output() modalChange = new EventEmitter<boolean>();

   /**
    * @summary The 'onModalCloseEvent' method updates the visibility of the search modal.
    *
    * __Emphasis:__ Medium emphasis – This method is important as it controls the visibility of the search modal.
    *
    * __Explanation:__ The 'onModalCloseEvent' method is used to update the 'openModal' property based on the passed value.
    * If the value is `true`, the modal will be shown; if the value is `false`, the modal will be hidden.
    *
    * @param value - A boolean indicating whether the modal should be shown (`true`) or hidden (`false`).
    *
    * __Example usages:__
    * - This method is typically used in the context of a component that needs to control the visibility of a modal based on user interactions.
    */
   onModalCloseEvent(value: boolean): void {
      this.modalChange.emit(value);
   }
}
