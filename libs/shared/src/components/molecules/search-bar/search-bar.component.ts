import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BadgeDirective } from '../../../directives';
import { IconPathPipe } from '../../../pipes';

@Component({
   selector: 'rya-search-bar',
   standalone: true,
   imports: [CommonModule, FormsModule, BadgeDirective, IconPathPipe],
   templateUrl: './search-bar.component.html',
   styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
   @Input() placeholder!: string;
   // * Shadow is false
   @Input() shadow = false;
   // * Default is false; reset this to false when we are editing the train arrival page
   @Input() popup = true;
   @Input() color: 'primary' | 'secondary' | 'tertiary' = 'primary';
   @Output() queryEmitter = new EventEmitter<string>();
   query!: string;

   emitQuery() {
      this.queryEmitter.emit(this.query);
   }
}
