import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
   DividerComponent,
   IconComponent,
   SearchBarComponent,
   SharedService,
   LoadingSkeletonComponent
} from '@atl-transit/shared';
import { SearchResultsComponent } from '..';
import { SearchResults } from '../../models/interfaces';
import { SearchService } from '../../services';
import { BehaviorSubject } from 'rxjs';

@Component({
   selector: 'rya-search-modal',
   standalone: true,
   imports: [
      CommonModule,
      SearchBarComponent,
      DividerComponent,
      SearchResultsComponent,
      IconComponent,
      SearchBarComponent,
      LoadingSkeletonComponent
   ],
   templateUrl: './search-modal.component.html',
   styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
   @Output() closeSearch = new EventEmitter<boolean>();
   searchResults$ = new BehaviorSubject<SearchResults[]>([]);
   isModalActive = this.shared.isSearchModalOpen;

   constructor(private service: SearchService, public shared: SharedService) {}

   ngOnInit(): void {
      this.service.initializeData();
      this.processSearchQuery('') 
   }  

   processSearchQuery(event: string) {
      this.service.processQuery(event.toLowerCase()).subscribe((results) => {
         this.searchResults$.next(results);
      });
   }

   log(): void {
      console.log('search modal open');
   }
}
