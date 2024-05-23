import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ToastVariant = 'default' | 'success' | 'error';
type ToastPosition = 'top' | 'bottom';

@Component({
   selector: 'shared-toast',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './toast.component.html'
})
export class ToastComponent {
   /**
    * @summary The 'float' input determines whether the toast message will float above the content or not.
    *
=    * __Emphasis:__ High emphasis – This property is important for the positioning of the toast message.
    *
    * __Explanation:__ Floating toasts are more noticeable and are typically used for important notifications.
    *
    * __Example usages:__
    * - Displaying error messages
    * - Showing success messages after form submission
    *
    */
   @Input() float: boolean = true;

   /**
    * @summary The 'variant' input determines the style of the toast message.
    *
    * __Emphasis:__ High emphasis – This property is important for the visual feedback of the toast message.
    *
    * __Explanation:__ Different variants are used to indicate the type of notification (default, success, error).
    *
    * __Example usages:__
    * - 'default' for general notifications
    * - 'success' for successful operations
    * - 'error' for error messages
    *
    */
   @Input() variant: ToastVariant = 'default';

   /**
    * @summary The 'position' input determines the position of the toast message on the screen.
    *
    * __Emphasis:__ Medium emphasis – This property affects the visibility of the toast message.
    *
    * __Explanation:__ Positioning can be used to avoid obscuring important content or controls.
    *
    * __Example usages:__
    * - 'top' for important notifications that need immediate attention
    * - 'bottom' for less critical notifications
    *
    */
   @Input() position: ToastPosition = 'bottom';
}
