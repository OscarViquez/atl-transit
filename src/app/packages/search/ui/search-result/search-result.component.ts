import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule],
  template: ` <div class="search-result"></div> `,
})
export class SearchResultComponent {}
