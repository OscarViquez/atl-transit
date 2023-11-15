import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonInputType, DividerComponent, HeroComponent } from 'shared';
import { SearchBarComponent, SearchFilterComponent, SearchResultsComponent } from '../../components';
import { GenericHeaderMock, SearchFilters, SearchModal, SearchResults } from '../../../shared';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'global-state';
import { stationGeneralSelector } from 'global-state';
import { TrainUiAdapter } from 'global-state';


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
   @Output() closeModalEmitter = new EventEmitter<boolean>();
   headerText = GenericHeaderMock;
   searchResults: SearchResults[] =  []; //SearchResultsMock;
   allStationData = this.store.select(stationGeneralSelector);
   searchModal: SearchModal = {
      isSearching: false,
      state: 'initial'
   };

   constructor(private store: Store<AppStateInterface>){}

   closeModal(): void {
      this.closeModalEmitter.emit(false);
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
      const filterInputs = document.querySelectorAll<HTMLInputElement>('.search-filter-input');
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

   processQuery(event: string)
   {
      this.searchResults = []
      const userQuery = event.toLowerCase()
      this.allStationData.subscribe((stations) => {
         stations.forEach((station) => {
            const stationNameLowerCase = station.name.toLowerCase()
            if(stationNameLowerCase.includes(userQuery) || stationNameLowerCase == userQuery)
            {
               const stationName = TrainUiAdapter.MapHeaderToUiView(stationNameLowerCase)
               const returnedResult: SearchResults = {
                  label: stationName,
                  action: ButtonInputType.HYPERLINK
               }

                  this.searchResults.push(returnedResult)
                  
            }
            })
         })
   }
     
   }

   

   // TODO: this is when we implement filters
   // Function to search using the selected filters
   // search(): void {
   //    const searchValue = this.getSearchValue();
   //    const searchFilters = this.getSearchFilters();
   //    // Perform search using searchValue and searchFilters
   // }
   
