import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MobileNavbarComponent } from './mobile-navbar/mobile-navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@Component({
   selector: 'lib-navigation',
   standalone: true,
   imports: [CommonModule, RouterModule, MobileNavbarComponent, SidebarComponent],
   templateUrl: './navigation.component.html',
   styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

}
