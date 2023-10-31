import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sidebar } from '../../../models';
import { SidebarMock } from '../../../content';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'lib-sidebar',
   standalone: true,
   imports: [CommonModule, RouterModule],
   templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   content: Sidebar = SidebarMock
}
