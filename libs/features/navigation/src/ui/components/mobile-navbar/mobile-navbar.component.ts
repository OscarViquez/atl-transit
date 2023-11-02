import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileNavMock } from '../../../shared/mocks/mobile-nav.mock';
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
   @Output() toggleModalEmitter = new EventEmitter<boolean>();
   content = MobileNavMock;
   menuIsOpen = false;
   openModal = false;

   setIcon(name: string): Icon | undefined {
      return this.content.icons.find((icon) => {
         if (icon.name === name) return icon;
         return undefined;
      });
   }

   toggleMenu(): void {
      this.menuIsOpen = !this.menuIsOpen;
   }

   toggleSearchModal(): void {
      this.toggleModalEmitter.emit((this.openModal = !this.openModal));
   }
}
