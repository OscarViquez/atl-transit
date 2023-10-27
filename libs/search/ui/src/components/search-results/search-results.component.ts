import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchResults } from '../../models/interfaces';

@Component({
   selector: 'lib-search-results',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './search-results.component.html',
   styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {
   @Input() results!: SearchResults[];
}
