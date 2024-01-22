import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '..';

@Component({
   selector: 'rya-navigation',
   standalone: true,
   imports: [CommonModule, RouterModule, SidebarComponent],
   templateUrl: './navigation.component.html',
   styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
   /**
    * * This component is a wrapper for the sidebar, navbar, and footer components.
    */
}
