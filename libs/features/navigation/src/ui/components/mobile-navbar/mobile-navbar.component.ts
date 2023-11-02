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

   toggleMenu(): void {
      this.menuIsOpen = !this.menuIsOpen;
   }

   toggleSearchModal(): void {
      this.toggleModalEmitter.emit((true));
   }
}
