import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent, SidebarComponent } from '../../components';
import { StaticContentService } from '../../../data/index';

@Component({
   selector: 'rya-navigation',
   standalone: true,
   imports: [CommonModule, RouterModule, SidebarComponent, NavbarComponent],
   templateUrl: './navigation.component.html',
   styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
   constructor(private staticContent: StaticContentService) {}

   @Output() searchClicked = new EventEmitter<boolean>();
   sideBarContent = this.staticContent.setSidebarContent();

   toggleSearch(bool: boolean): void {
      this.searchClicked.emit(bool);
   }
   
}
