import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type ToastVariant = 'default' | 'success' | 'error';
type ToastPosition = 'top' | 'bottom';

@Component({
  selector: 'core-toast',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Toast component -->
    <article
      class="fixed z-50 flex mx-auto rounded-md w-full max-w-80 overlay-shadow bg-white"
      [ngClass]="{
        'bottom-24': position === 'bottom',
        'top-14': position === 'top',
      }">
      <!-- Toast header -->
      <div class="h-6 flex items-center justify-center rounded-t-md">
        <span class="text-1 text-neutral-400 text-center"></span>
      </div>
      <!-- Toast body -->
      <div class="p-4 pb-3 text-neutral-900 text-1">
        <ng-content> </ng-content>
      </div>
    </article>
  `,
})
export class ToastComponent {
  /**
   * @summary The 'position' input determines the position of the toast message on the screen.
   * __Example usages:__
   * - 'top' for important notifications that need immediate attention
   * - 'bottom' for less critical notifications
   *
   */
  @Input() position: ToastPosition = 'bottom';

  /**
   * @summary The 'variant' input determines the color of the toast message.
   * __Example usages:__
   * - 'default' for general information
   * - 'success' for successful operations
   * - 'error' for error messages
   *
   */
  @Input() variant: ToastVariant = 'default';
}
