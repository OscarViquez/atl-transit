import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { pageHeaderContent } from '../../content';
import { Icon } from '../../models';

@Component({
   selector: 'lib-header',
   standalone: true,
   imports: [CommonModule, RouterModule],
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   @Input() content = pageHeaderContent;
   menuIsOpen = false;

   setIcon(name: string): Icon | undefined {
      return this.content.icons.find((icon) => {
         if (icon.name === name) return icon;
         return undefined;
      });
   }

   toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
   }
}
