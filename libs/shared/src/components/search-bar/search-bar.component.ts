import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchIconComponent } from '../../icons';

@Component({
   selector: 'shared-search-bar',
   standalone: true,
   imports: [CommonModule, FormsModule, SearchIconComponent],
   template: `
      <div [class]="interactive ? 'search gap-4' : 'search cursor-pointer custom-outline'">
         <shared-icon-search class="flex items-center" />
         <input
            type="text"
            [placeholder]="placeholder"
            class="flex-1 border-none focus:outline-none"
            [(ngModel)]="query"
            (ngModelChange)="emitQuery()"
            [readonly]="!interactive"
         />
      </div>
   `
})
export class SearchBarComponent {
   /**
    * @summary The 'placeholder' input sets the placeholder text for the search bar.
    *
    * @description
    * __Emphasis:__ Low emphasis – This property is used for providing a hint to the user about what they can search for.
    *
    * __Example usages:__
    * - 'Search for products...'
    * - 'Search for articles...'
    *
    */
   @Input() placeholder!: string;

   /**
    * @summary The 'interactive' input determines whether the search bar is functional or not.
    *
    * __Emphasis:__ High emphasis – This property is crucial as it controls the functionality of the search bar.
    *
    * __Explanation:__ The 'interactive' state is used to switch between a clickable, non-functional state (which would normally open the search modal) and a functional state where the search bar can collect user input.
    *
    * __Example usages:__
    * - 'true' when the search bar should collect user input
    * - 'false' when the search bar should only open the search modal on click
    *
    */
   @Input() interactive = false;

   /**
    * @summary `queryEmitter` is an instance of `EventEmitter` that emits the search query when a search is performed.
    *
    * __Emphasis:__ High emphasis – This property is crucial as it allows parent components to react to search queries.
    *
    * __Explanation:__ `queryEmitter` is used to propagate the search query to parent components that can then handle the search logic.
    *
    * __Example usages:__
    * - Listen to `queryEmitter` in a parent component to perform a search when a query is emitted.
    *
    */
   @Output() queryEmitter = new EventEmitter<string>();

   /**
    * `query` is a string that represents the current search query.
    * It's marked as `protected`, which means it can be accessed within this class and its subclasses.
    */
   protected query!: string;

   /**
    * `emitQuery` is a method that emits the current search query.
    *
    * This method does one thing:
    * It calls `this.queryEmitter.emit` with `this.query`, which emits an event that the parent component can listen to.
    *
    * Example usage:
    * ```typescript
    * this.emitQuery(); // Emits the current search query
    * ```
    */
   emitQuery() {
      this.queryEmitter.emit(this.query);
   }
}
