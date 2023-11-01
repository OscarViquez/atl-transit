import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavMock } from '../../../shared/mocks/mobile-nav.mock'
import { NavigationUI } from '../../../shared/models/interface';
import { RouterModule } from '@angular/router';
import { Icon } from 'shared';

@Component({
   selector: 'lib-mobile-navbar',
   standalone: true,
   imports: [CommonModule, RouterModule],
   templateUrl: './mobile-navbar.component.html',
   styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent {
   content = MobileNavMock;
   menuIsOpen = false;
   currentPage: NavigationUI = {
      pageName: 'Home',
      index: 0
   };

   setIcon(name: string): Icon | undefined {
      return this.content.icons.find((icon) => {
         if (icon.name === name) return icon;
         return undefined;
      });
   }

   toggleMenu(): void {
      this.menuIsOpen = !this.menuIsOpen;
   }
}
