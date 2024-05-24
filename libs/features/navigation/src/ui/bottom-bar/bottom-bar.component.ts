import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NAV_ROUTES, PageNavigationItem } from '../../shared';
import { PlaceholderIconComponent } from '../placeholder-icon.component';
import { LoadingSkeletonComponent, ModalComponent } from '@atl-transit/shared';

@Component({
   selector: 'navigation-bottom-bar',
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      BottomBarComponent,
      LoadingSkeletonComponent,
      PlaceholderIconComponent,
      ModalComponent
   ],
   templateUrl: './bottom-bar.component.html'
})
export class BottomBarComponent {
   /**
    * @summary The 'searchModalChange' output property emits events when the search modal's visibility changes.
    *
    * __Emphasis:__ High emphasis – This output property is crucial as it allows parent or sibling components to react to changes in the search modal's visibility.
    *
    * __Explanation:__ The 'searchModalChange' property is an instance of Angular's EventEmitter. It emits a boolean value indicating whether the search modal should be shown (`true`) or hidden (`false`).
    *
    * __Example usages:__
    * - This output property is typically used in conjunction with a method that changes the visibility of the search modal, such as 'showSearchModal' or 'hideSearchModal'.
    */
   @Output() searchModalChange = new EventEmitter<boolean>();

   /**
    * @summary The 'routes' property holds an array of navigation items for the bottom bar.
    *
    * __Emphasis:__ Medium emphasis – This property is important as it defines the navigation items that are displayed in the bottom bar.
    *
    * __Explanation:__ The 'routes' property is an array of 'PageNavigationItem' objects. Each object represents a navigation item in the bottom bar.
    *
    * __Example usages:__
    * - This property is typically used in the template of the bottom bar component to generate navigation items.
    */
   routes: PageNavigationItem[] = NAV_ROUTES;

   /**
    * @summary The 'routeIndex' property holds the index of the currently active route.
    *
    * __Emphasis:__ Medium emphasis – This property is important as it allows the bottom bar component to know which navigation item is currently active.
    *
    * __Explanation:__ The 'routeIndex' property is a number that represents the index of the currently active route in the 'routes' array.
    *
    * __Example usages:__
    * - This property is typically used in the template of the bottom bar component to apply a different style to the currently active navigation item.
    */
   routeIndex!: number;

   /**
    * @summary The 'showSearchModal' method triggers the opening of the search modal.
    *
    * __Emphasis:__ High emphasis – This method is crucial as it controls the opening of the search modal.
    *
    * __Explanation:__ The 'showSearchModal' method emits a `true` value through the 'searchModalChange' event emitter.
    * This typically triggers the opening of a search modal in a parent or sibling component that listens to this event.
    *
    * __Example usages:__
    * - This method is typically used in response to a user action that requires the search modal to be opened, such as clicking on a search button.
    */
   showSearchModal(): void {
      this.searchModalChange.emit(true);
   }
}
