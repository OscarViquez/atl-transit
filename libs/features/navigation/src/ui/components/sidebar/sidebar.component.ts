import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'lib-sidebar',
   standalone: true,
   imports: [CommonModule, RouterModule],
   templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   @Output() toggleModalEmitter = new EventEmitter<boolean>();
   openModal = false;

   toggleSearchModal(): void {
      this.toggleModalEmitter.emit((this.openModal = !this.openModal));
   }
}
