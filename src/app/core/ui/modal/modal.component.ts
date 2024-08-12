import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'core-modal',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (isOpen) {
      <!-- Overlay Background that goes behind the modal -->
      <div
        class="overlay-full overflow z-40 cursor-pointer"
        (click)="closeModal()"
        id="overlay"></div>

      <!-- 
          NOTE: We wrap the modal with a div, because the actual modal div has a background.
          So when I add an opacity of 0 onCloseModal... the modal will still be visible. because the modal has a background: white, and opacity will only affect the background of the modal.
          That is why I wrap the modal with a div, and i add the opacity to the div, so when the modal is closed, the div will be invisible, and the modal and it's content will be invisible too.
      -->
      <div id="modal">
        <div
          class="modal z-50 h-screen md:h-4/5 md:max-w-[736px] overflow-hidden p-0"
          [ngClass]="{
            'top-4 rounded-2xl': isBottomSheet,
            'animate-modal': !isBottomSheet && isOpen,
            'animate-bottom-sheet-up md:animate-modal': isBottomSheet && isOpen,
          }">
          <!-- NOTE: This close button is ALWAYS fixed to the top-right of the modal -->
          <div class="fixed z-[60] right-0 ml-auto py-6 pr-6">
            <button
              class="grid place-content-center h-10 w-10 z-[70]
             bg-neutral-100 border border-neutral-100 rounded-full transition-all ease-linear duration-100 
            hover:bg-neutral-400 focus:outline focus:outline-white focus:outline-2 focus:shadow-focused-state"
              (click)="closeModal()">
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
          <!-- NOTE: This is where the modal content displays -->
          <div class="overflow-y-scroll scrollbar-hide pb-8">
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    }
  `,
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
  @Input() isBottomSheet = false;

  /**
   * The `modalChange` event is emitted whenever the modal is closed.
   * It emits a boolean value representing the new state of the modal.
   * It is an @Output property, meaning a parent component can listen for this event.
   */
  @Output() modalChange = new EventEmitter<boolean>();

  // Inject the Renderer2 service to manipulate the DOM
  constructor(private renderer: Renderer2) {}

  /**
   * We are calling the `updateBodyClass` method when the component is initialized on the page
   * so we can prevent user from scrolling when the modal is open.
   */
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
    const modalElement = document.getElementById('modal');
    const overlayElement = document.getElementById('overlay');

    if (modalElement && overlayElement) {
      // Add the animate-fade-out class
      this.renderer.addClass(modalElement, 'animate-fade-out');
      this.renderer.addClass(overlayElement, 'animate-fade-out');

      // Remove the animate-fade-out class after 0.3 seconds
      setTimeout(() => {
        this.renderer.removeClass(overlayElement, 'animate-fade-out');
        this.renderer.removeClass(modalElement, 'animate-fade-out');

        // Set isOpen to false and emit the modalChange event
        this.isOpen = false;
        this.modalChange.emit(false);
      }, 300);
    } else {
      // Fallback in case elements are not found
      this.isOpen = false;
      this.modalChange.emit(false);
    }
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
