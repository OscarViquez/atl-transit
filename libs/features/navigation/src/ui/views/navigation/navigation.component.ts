/* eslint-disable @typescript-eslint/no-empty-function */
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MobileNavbarComponent, SidebarComponent } from '../../components';
import { SearchModalComponent } from '@atl-transit/search';
import { StaticContentService } from '../../../data';

@Component({
   selector: 'lib-navigation',
   standalone: true,
   imports: [CommonModule, RouterModule, MobileNavbarComponent, SidebarComponent, SearchModalComponent],
   templateUrl: './navigation.component.html',
   styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
   constructor(private service: StaticContentService) {}
   sideBarContent = this.service.setSidebarContent();
   openModal = false;

   handleToggleModal(eventToggle: boolean, closeModal = false): void {
      if (closeModal) {
         this.openModal = false;
      } else {
         this.openModal = eventToggle;
      }
   }
}
