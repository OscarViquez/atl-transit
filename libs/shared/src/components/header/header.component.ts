import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeader } from '../../models';
import { pageHeaderMock } from '../../mocks';

@Component({
   selector: 'lib-header',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   @Input() content = pageHeaderMock;
   menuIsOpen = false;


   toggleMenu() {
      this.menuIsOpen = !this.menuIsOpen;
   }
}
