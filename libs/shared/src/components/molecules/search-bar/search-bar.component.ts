import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type ColorType = 'primary' | 'secondary' | 'tertiary';

@Component({
   selector: 'rya-search-bar',
   standalone: true,
   imports: [CommonModule, FormsModule],
   templateUrl: './search-bar.component.html',
   styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
   @Input() placeholder!: string;
   @Input() color: ColorType = 'primary';
   @Output() queryEmitter = new EventEmitter<string>();
   query!: string;

   emitQuery() {
      this.queryEmitter.emit(this.query);
   }
}
