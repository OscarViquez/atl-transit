import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../../shared';
import { IconComponent } from '@atl-transit/shared';
import { gsap } from 'gsap';

@Component({
   selector: 'rya-navbar',
   standalone: true,
   imports: [CommonModule, SidebarComponent, IconComponent, RouterModule],
   template: `
      <div class="nav">
         <div class="nav-sticky">
            <div class="nav-wrapper">
               <div class="nav__logo">
                  <rya-icon [category]="menu.icon.category" [name]="menu.icon.name" [mode]="menu.icon.mode" />
               </div>
               <div class="nav__buttons">
                  <ng-container *ngIf="!menuIsOpen">
                     <div class="nav__button">
                        <rya-icon [category]="'navigation'" [name]="'search'" class="search" (click)="toggleSearch()" />
                     </div>
                     <div class="nav__button">
                        <rya-icon [category]="'navigation'" [name]="'hamburger'" (click)="toggleMenu()" />
                     </div>
                  </ng-container>
                  <ng-container *ngIf="menuIsOpen">
                     <div class="nav__button">
                        <rya-icon [category]="'navigation'" [name]="'close'" (click)="toggleMenu()" />
                     </div>
                  </ng-container>
               </div>
            </div>
         </div>
         <rya-sidebar [ngClass]="{ 'display-none': !menuIsOpen }" [content]="menu" (click)="toggleMenu()" />
      </div>
   `,
   styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   @Input() menu!: Sidebar;
   @Input() menuIsOpen = false;
   @Input() searchIsOpen = false;
   @Output() searchClicked = new EventEmitter<boolean>();

   toggleSearch(): void {
      this.searchClicked.emit(true);
   }

   toggleMenu(): void {
      this.menuIsOpen = !this.menuIsOpen;
      if (this.menuIsOpen) {
         gsap.from('rya-sidebar', {
            opacity: 0,
            duration: 0.3,
            stagger: 0.1
         });
      }
   }
}
