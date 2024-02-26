import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeDirective } from '../../directives';
import { IconPathPipe } from '../../pipes';
import { SHARED_MOCKS } from '../../mocks';

@Component({
   selector: 'rya-search-bar',
   standalone: true,
   imports: [CommonModule, FormsModule, BadgeDirective, IconPathPipe],
   templateUrl: './search-bar.component.html',
   styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
   @Input() placeholder!: string;
   @Input() popup = true;
   @Input() flag = 'call-to-action';
   @Output() queryEmitter = new EventEmitter<string>();

   /**
    * Properties for rendering content for search bar
    */
   content = SHARED_MOCKS.search;
   keypressIcon = this.getPlatformIcon();
   query!: string;

   /**
    * This method emits the query (the search input) to the parent component
    */
   emitQuery() {
      this.queryEmitter.emit(this.query);
   }

   /**
    * This method returns the platform icon based on the user agent. Platform also refers to Operating System. e.g Mac or Windows
    */
   getPlatformIcon(): string {
      const userAgent = window.navigator.userAgent;
      return userAgent.includes('Mac') ? 'apple' : 'windows';
   }
}
