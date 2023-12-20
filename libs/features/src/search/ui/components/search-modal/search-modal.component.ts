import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
   DividerComponent,
   ModalAnimationDirective,
   IconComponent,
   SearchBarComponent,
   SharedService
} from '@atl-transit/shared';
import { SearchResultsComponent } from '..';
import { SearchResults } from '../../../shared';
import { SearchService } from '../../../services';
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
      ModalAnimationDirective,
      SearchBarComponent
   ],
   templateUrl: './search-modal.component.html',
   styleUrls: ['./search-modal.component.scss']
})
export class SearchModalComponent implements OnInit {
   @Output() closeSearch = new EventEmitter<boolean>();
   searchResults$ = new BehaviorSubject<SearchResults[]>([]);
   isModalActive = this.shared.searchModalActive;
   
   constructor(private service: SearchService, public shared: SharedService) {}

   ngOnInit(): void {
      this.service.init();
      this.processQuery('A');
   }

   closeModal(): void {
      this.shared.searchModalActive = false;
   }

   processQuery(event: string) {
      this.service.processQuery(event.toLowerCase()).subscribe((results) => {
         this.searchResults$.next(results);
      });
   }
}
