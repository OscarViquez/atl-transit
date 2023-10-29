import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DividerComponent, HeroComponent } from 'shared';
import {
   SearchBarComponent,
   SearchFilterComponent,
   SearchResultsComponent
} from '@search-ui';
import { GenericHeaderMock, SearchResultsMock } from '../../mocks/static-content.mock';
import { SearchFilters, SearchModal } from '../../models';

@Component({
   selector: 'lib-search-modal',
   standalone: true,
   imports: [
      CommonModule,
      HeroComponent,
      SearchBarComponent,
      DividerComponent,
      SearchResultsComponent,
      SearchFilterComponent
   ],
   templateUrl: './search-modal.component.html',
   styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent {
   headerText = GenericHeaderMock;
   searchResults = SearchResultsMock;
   searchModal: SearchModal = {
      isSearching: false,
      state: 'initial'
   };

   // Function to search using the selected filters
   search(): void {
      const searchValue = this.getSearchValue();
      const searchFilters = this.getSearchFilters();
      // Perform search using searchValue and searchFilters
   }

   // Updates parameter is of type Partial<SearchModal>
   updateSearchModal(updates: Partial<SearchModal>): void {
      this.searchModal = {
         ...this.searchModal,
         ...updates
      };
   }

   // Function to get the value of the search bar
   getSearchValue(): string | undefined {
      const searchInput = document.querySelector<HTMLInputElement>('#search-input');
      return searchInput?.value;
   }

   // Function to get the selected search filters
   getSearchFilters(): SearchFilters {
      const filterInputs =
         document.querySelectorAll<HTMLInputElement>('.search-filter-input');
      const filters: SearchFilters = {
         byNorthAndSouth: false,
         byStations: false,
         byBusRoutes: false,
         byStreetCar: false
      };
      filterInputs.forEach((input) => {
         if (input.checked) {
            filters[input.id as keyof SearchFilters] = true;
         }
      });
      return filters;
   }
}
