import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-search-bar',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './search-bar.component.html',
   styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {}
