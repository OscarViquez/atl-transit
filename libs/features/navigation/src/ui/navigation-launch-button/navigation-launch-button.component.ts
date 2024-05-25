import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingSkeletonComponent } from '@atl-transit/shared';
import { PageNavigationItem } from '../../shared';

@Component({
   selector: 'navigation-launch-button',
   standalone: true,
   imports: [CommonModule, LoadingSkeletonComponent],
   template: `
      <div class="flex flex-col gap-2 items-center justify-center w-full py-2 text-sm">
         @defer {
            <div class="icon-color-neutral03 w-6 h-6" [ngClass]="content.icon"></div>
         } @placeholder (minimum 500ms) {
            <shared-loading-skeleton [loadingItem]="'icon'" />
         }
         <div
            class="flex items-center text-neutral03 justify-center text-1 font-medium h-4 px-2 rounded-lg"
         >
            {{ content.label }}
         </div>
      </div>
   `
})
export class NavigationLaunchButtonComponent {
   @Input() content: PageNavigationItem = { icon: '', label: '', routerLink: '' };
}
