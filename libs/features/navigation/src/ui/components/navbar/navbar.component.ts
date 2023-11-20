import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { Sidebar } from '../../../shared';

@Component({
   selector: 'rya-navbar',
   standalone: true,
   imports: [CommonModule, SidebarComponent, RouterModule],
   template: `<rya-sidebar [content]='menu'/>`,
   styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
   @Input() header!: Sidebar;
   @Input() menu!: Sidebar;
}
