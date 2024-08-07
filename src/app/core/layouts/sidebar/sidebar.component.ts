import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoadingSkeletonComponent } from '../../ui';
import { IconLogoComponent } from '../../icons';
import { NAV_MENU_ITEMS, NavMenuItem } from '../../models';

@Component({
  selector: 'core-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, LoadingSkeletonComponent, IconLogoComponent],
  template: `
    <aside class="bg-white fixed z-20 h-screen flex flex-col gap-8 py-10">
      <!-- * App Logo  -->
      @defer {
        <core-icon-logo class="w-[130px] ml-auto mr-8"></core-icon-logo>
      } @placeholder (minimum 500ms) {
        <div class="w-[130px] h-8 ml-auto mr-8">
          <core-loading-skeleton [loadingItem]="'list'" />
        </div>
      }

      <!-- * Nav Routes List  -->
      <nav class="flex flex-col md:ml-6 lg:ml-auto">
        @for (item of navItems; track idx; let idx = $index) {
          @defer {
            <a
              *ngIf="item.label !== 'Search'"
              class="flex gap-3 h-12 w-[10.75rem] p-[0.875rem] text-3 font-medium mt-auto rounded-md transition-all ease-linear duration-100"
              #refRouter="routerLinkActive"
              routerLinkActive="bg-primary bg-opacity-10 text-primary"
              [routerLink]="item.routerLink">
              {{ item.label }}
            </a>
          } @placeholder (minimum 500ms) {
            <div *ngIf="idx < 4" class="h-12 w-[10.75rem] p-[0.875rem]">
              <core-loading-skeleton [loadingItem]="'list'" />
            </div>
          } @error {
            <div class="h-12 w-[10.75rem] p-[0.875rem]">
              <core-loading-skeleton [loadingItem]="'list'" />
            </div>
          }
        }
      </nav>
    </aside>
  `,
})
export class SidebarComponent {
  navItems: NavMenuItem[] = NAV_MENU_ITEMS;
}
