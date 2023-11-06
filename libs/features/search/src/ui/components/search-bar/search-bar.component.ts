import { Component, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
   selector: 'lib-search-bar',
   standalone: true,
   imports: [CommonModule,
   FormsModule],
   templateUrl: './search-bar.component.html',
   styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {
   query!: string;
   @Output() queryEmitter = new EventEmitter<string>()

   emitQuery(){
      this.queryEmitter.emit(this.query)
   }
}
