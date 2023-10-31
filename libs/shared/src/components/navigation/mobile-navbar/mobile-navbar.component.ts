import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { pageHeaderContent } from '../../../content';
import { Icon, NavigationUI } from '../../../models';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'lib-mobile-navbar',
   standalone: true,
   imports: [CommonModule, RouterModule],
   templateUrl: './mobile-navbar.component.html',
   styleUrls: ['./mobile-navbar.component.scss']
})
export class MobileNavbarComponent {
   content = pageHeaderContent;
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
