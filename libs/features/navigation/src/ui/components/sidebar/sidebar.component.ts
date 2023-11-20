import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { IconComponent, MenuComponent } from '@atl-transit/shared';
import { Sidebar } from '../../../shared/models/interface';

@Component({
   selector: 'lib-sidebar',
   standalone: true,
   imports: [CommonModule, RouterModule, MenuComponent, IconComponent],
   template: `
      <div class="sticky">
         <aside class="sidebar">
            <div class="sidebar__logo">
               <rya-icon [category]="content.icon.category" [name]="content.icon.name" [mode]="content.icon.mode" />
            </div>
            <ng-container *ngFor="let menu of content.menu">
               <rya-menu [content]="menu"></rya-menu>
            </ng-container>
         </aside>
      </div>
   `,
   styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   @Input() content!: Sidebar;
   @Output() toggleModalEmitter = new EventEmitter<boolean>();
   openModal = false;

   toggleSearchModal(): void {
      this.toggleModalEmitter.emit((this.openModal = !this.openModal));
   }
}
