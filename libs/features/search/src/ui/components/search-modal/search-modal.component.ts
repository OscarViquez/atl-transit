import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { DividerComponent, ModalAnimationDirective, IconComponent, SearchBarComponent } from '@atl-transit/shared';
import { AppStateInterface } from '@atl-transit/global-state';
import { SearchResultsComponent } from '../../components';
import { SearchResults } from '../../../shared';
import { SearchService } from '../../../data';
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
   isModalActive = true;
   searchResults$ = new BehaviorSubject<SearchResults[]>([]);

   constructor(private service: SearchService, private store: Store<AppStateInterface>) {}

   ngOnInit(): void {
      this.service.init();
      this.processQuery('A');
   }

   closeModal(): void {
      this.isModalActive = false;
      setTimeout(() => {
         this.closeSearch.emit(false);
      }, 300);
   }

   processQuery(event: string) {
      this.service.processQuery(event.toLowerCase()).subscribe((results) => {
         this.searchResults$.next(results);
      });
   }
}
