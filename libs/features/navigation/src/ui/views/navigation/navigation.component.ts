import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MobileNavbarComponent, SidebarComponent } from '../../components';
import { SearchModalComponent } from '@atl-transit/search';

@Component({
   selector: 'lib-navigation',
   standalone: true,
   imports: [CommonModule, RouterModule, MobileNavbarComponent, SidebarComponent, SearchModalComponent],
   templateUrl: './navigation.component.html',
   styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
   /* Boolean to check if Search modal is open or not */
   openModal = false;

   /* Method that toggles opening and closing modal */
   handleToggleModal(eventToggle: boolean) {
      // Handle the event here. 'open' is the value emitted from the child component.
      this.openModal = eventToggle;
      console.log(this.openModal)
      console.log({eventToggle})
   }
}
