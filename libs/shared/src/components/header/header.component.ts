import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeader } from '../../models';
import { pageHeaderContent } from '../../mocks';
import { Icon } from '../../types';

@Component({
   selector: 'lib-header',
   standalone: true,
   imports: [CommonModule],
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
