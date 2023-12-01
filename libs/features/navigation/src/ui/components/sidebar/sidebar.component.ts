import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent, MenuComponent } from '@atl-transit/shared';
import { Sidebar } from '../../../shared/models/interface';
import { gsap } from 'gsap';

@Component({
   selector: 'rya-sidebar',
   standalone: true,
   imports: [CommonModule, RouterModule, MenuComponent, IconComponent],
   template: `
      <div class="sticky">
         <aside class="sidebar">
            <div class="sidebar__logo">
               <rya-icon [category]="content.icon.category" [name]="content.icon.name" [mode]="content.icon.mode" />
            </div>
            <div class="sidebar__menu" *ngFor="let menu of content.menu">
               <rya-menu [content]="menu"></rya-menu>
            </div>
            <rya-icon class="sidebar__banner" [category]="'navigation'" [name]="'banner'" />
         </aside>
      </div>
   `,
   styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements AfterViewInit {
   @Input() content!: Sidebar;
   @Output() toggleModalEmitter = new EventEmitter<boolean>();
   openModal = false;

   ngAfterViewInit(): void {
      setTimeout(() => {
         this.animateContent('.sidebar__menu', 0.5);
      }, 0);
   }

   toggleSearchModal(): void {
      this.toggleModalEmitter.emit((this.openModal = !this.openModal));
   }

   animateContent(element: string, delayNumber: number) {
      const results = Array.from(document.querySelectorAll(element));
      results.forEach((result, index) => {
         gsap.fromTo(result, { opacity: 0 }, { opacity: 1, delay: index * delayNumber });
      });
   }
}
