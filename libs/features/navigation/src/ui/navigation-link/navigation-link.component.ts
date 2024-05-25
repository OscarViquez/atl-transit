import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNavigationItem } from '../../shared';
import { PlaceholderIconComponent } from '../placeholder-icon.component';
import { LoadingSkeletonComponent } from '@atl-transit/shared';

@Component({
   selector: 'navigation-link',
   standalone: true,
   imports: [CommonModule, RouterModule, PlaceholderIconComponent, LoadingSkeletonComponent],
   template: `
      <a
         class="flex flex-col gap-2 items-center justify-center w-full py-2 text-sm"
         [routerLink]="content.routerLink"
      >
         @defer {
            <div class="w-6 h-6" [ngClass]="content.icon"></div>
         } @placeholder (minimum 500ms) {
            <shared-loading-skeleton [loadingItem]="'icon'" />
         }
         <span
            class="flex items-center text-neutral03 justify-center text-1 font-medium h-4 px-2 rounded-lg"
            #refRouter="routerLinkActive"
            routerLinkActive="bg-primary text-white transition-bg ease-linear duration-100"
         >
            {{ content.label }}
         </span>
      </a>
   `
})
export class NavigationLinkComponent {
   @Input() content: PageNavigationItem = { icon: '', label: '', routerLink: '' };
}
