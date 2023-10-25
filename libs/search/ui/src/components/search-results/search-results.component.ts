import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-search-results',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './search-results.component.html',
   styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent {}
