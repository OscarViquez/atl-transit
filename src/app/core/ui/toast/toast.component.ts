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
      class="flex rounded-md min-w-80 overlay-shadow bg-white animate-accordion-up"
      [ngClass]="{ '': float }">
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
   * @summary The 'float' input determines whether the toast message will float above the content or not.
   * __Example usages:__
   * - Displaying error messages
   * - Showing success messages after form submission
   *
   */
  @Input() float: boolean = true;

  /**
   * @summary The 'position' input determines the position of the toast message on the screen.
   * __Example usages:__
   * - 'top' for important notifications that need immediate attention
   * - 'bottom' for less critical notifications
   *
   */
  @Input() position: ToastPosition = 'bottom';

  @Input() variant: ToastVariant = 'default';
}
