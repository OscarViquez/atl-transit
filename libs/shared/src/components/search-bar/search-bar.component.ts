import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
   selector: 'shared-search-bar',
   standalone: true,
   imports: [CommonModule, FormsModule],
   template: `
      <div [class]="interactive ? 'search gap-4' : 'search cursor-pointer custom-outline'">
         <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
         >
            <path
               fill-rule="evenodd"
               clip-rule="evenodd"
               d="M6.65191 0.373047C4.9706 0.373047 3.35814 1.04095 2.16927 2.22982C0.9804 3.41869 0.3125 5.03114 0.3125 6.71246C0.3125 8.39378 0.980401 10.0062 2.16927 11.1951C3.35814 12.384 4.9706 13.0519 6.65191 13.0519C8.08128 13.0519 9.46088 12.5691 10.5728 11.694L14.4086 15.5303C14.7014 15.8232 15.1763 15.8233 15.4692 15.5304C15.7621 15.2375 15.7622 14.7627 15.4693 14.4697L11.6334 10.6333C12.5086 9.52144 12.9913 8.14184 12.9913 6.71246C12.9913 5.03114 12.3234 3.41869 11.1346 2.22982C9.94568 1.04095 8.33323 0.373047 6.65191 0.373047ZM10.091 10.1173C10.9878 9.2114 11.4913 7.98789 11.4913 6.71246C11.4913 5.42897 10.9815 4.19804 10.0739 3.29048C9.16633 2.38291 7.9354 1.87305 6.65191 1.87305C5.36842 1.87305 4.1375 2.38291 3.22993 3.29048C2.32237 4.19804 1.8125 5.42897 1.8125 6.71246C1.8125 7.99595 2.32237 9.22688 3.22993 10.1344C4.1375 11.042 5.36842 11.5519 6.65191 11.5519C7.92736 11.5519 9.1509 11.0484 10.0568 10.1515C10.0623 10.1456 10.0679 10.1398 10.0737 10.1341C10.0794 10.1284 10.0851 10.1228 10.091 10.1173Z"
               fill="#484848"
            />
         </svg>
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
