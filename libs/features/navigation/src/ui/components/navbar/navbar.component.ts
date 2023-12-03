import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../../shared';
import { IconComponent, SharedService } from '@atl-transit/shared';
import { gsap } from 'gsap';

@Component({
   selector: 'rya-navbar',
   standalone: true,
   imports: [CommonModule, SidebarComponent, IconComponent, RouterModule],
   templateUrl: './navbar.component.html',
   styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   @Input() menu!: Sidebar;
   @Input() menuIsOpen = false;

   constructor(public shared: SharedService) {}

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
