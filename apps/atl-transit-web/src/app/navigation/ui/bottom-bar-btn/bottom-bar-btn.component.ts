import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNavigationItem } from '../../shared';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'navigation-bottom-bar-btn',
   standalone: true,
   imports: [CommonModule, RouterModule],
   template: `
      <a
         [routerLink]="content.routerLink"
         routerLinkActive="text-primary"
         class="flex flex-col gap-2 items-center justify-center w-full pb-2 text-sm"
      >
         <span
            class="block h-[2px] w-4/5 mx-auto rounded-b-[24px]"
            routerLinkActive="bg-blue bg-primary transition-bg ease-linear duration-100"
         ></span>

         <ng-content></ng-content>

         <span
            class="flex items-center text-neutral-900 justify-center text-1 font-medium h-4 px-2 rounded-lg"
            routerLinkActive="text-primary transition-bg ease-linear duration-100"
         >
            {{ content.label }}
         </span>
      </a>
   `,
   styles: ``
})
export class BottomBarBtnComponent {
   @Input() content!: PageNavigationItem;
}
