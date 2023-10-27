import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent, GenericHeader, HeroComponent } from 'shared';
import { SearchBarComponent, SearchResultsComponent } from '@search-ui';
import {
   GenericHeaderMock,
   SearchResultsMock
} from '../../mocks/static-content.mock';

@Component({
   selector: 'lib-search-modal',
   standalone: true,
   imports: [
      CommonModule,
      HeroComponent,
      SearchBarComponent,
      DividerComponent,
      SearchResultsComponent
   ],
   templateUrl: './search-modal.component.html',
   styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent {
   headerText = GenericHeaderMock;
   searchResults = SearchResultsMock;
}
