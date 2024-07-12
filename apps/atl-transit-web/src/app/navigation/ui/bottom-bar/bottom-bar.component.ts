import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NAV_ROUTES, PageNavigationItem } from '../../shared';
import { PlaceholderIconComponent } from '../placeholder-icon.component';
import { LoadingSkeletonComponent, ModalComponent } from '@atl-transit/shared';
import { BottomBarBtnComponent } from '../bottom-bar-btn/bottom-bar-btn.component';

@Component({
   selector: 'navigation-bottom-bar',
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      ModalComponent,
      LoadingSkeletonComponent,
      PlaceholderIconComponent,
      BottomBarBtnComponent
   ],
   template: `
      <div
         class="bg-white bg-opacity-70 backdrop-blur-base rounded-md fixed bottom-0 z-30 w-full pb-4 lg:hidden"
      >
         <nav class="flex justify-between w-full px-4 items-center">
            <navigation-bottom-bar-btn [content]="routes[0]">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
               >
                  <path
                     d="M16.25 3C18.3211 3 20 4.67893 20 6.75V15.75C20 17.5253 18.7664 19.0124 17.1097 19.401L19.5724 20.5729C19.9464 20.7509 20.1052 21.1985 19.9271 21.5725C19.7639 21.9153 19.3742 22.0773 19.0224 21.9647L18.9275 21.9271L13.8298 19.5H10.1688L5.07244 21.9271C4.69846 22.1052 4.25093 21.9464 4.07285 21.5725C3.89476 21.1985 4.05356 20.7509 4.42754 20.5729L6.88986 19.4009C5.23335 19.0121 3.99999 17.5251 3.99999 15.75V6.75C3.99999 4.67893 5.67892 3 7.74999 3H16.25ZM18.4998 14H5.49982L5.49999 15.75C5.49999 16.9926 6.50735 18 7.74999 18H16.25C17.4926 18 18.5 16.9926 18.5 15.75L18.4998 14ZM7.99999 15C8.55228 15 8.99999 15.4477 8.99999 16C8.99999 16.5523 8.55228 17 7.99999 17C7.44771 17 6.99999 16.5523 6.99999 16C6.99999 15.4477 7.44771 15 7.99999 15ZM16 15C16.5523 15 17 15.4477 17 16C17 16.5523 16.5523 17 16 17C15.4477 17 15 16.5523 15 16C15 15.4477 15.4477 15 16 15ZM16.25 4.5H7.74999C6.50735 4.5 5.49999 5.50736 5.49999 6.75L5.49982 12.5H18.4998L18.5 6.75C18.5 5.50736 17.4926 4.5 16.25 4.5ZM13.25 6C13.6642 6 14 6.33579 14 6.75C14 7.16421 13.6642 7.5 13.25 7.5H10.75C10.3358 7.5 9.99999 7.16421 9.99999 6.75C9.99999 6.33579 10.3358 6 10.75 6H13.25Z"
                     fill="currentColor"
                  />
               </svg>
            </navigation-bottom-bar-btn>
            <navigation-bottom-bar-btn [content]="routes[1]">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
               >
                  <path
                     d="M7.99999 16C8.55228 16 8.99999 15.5523 8.99999 15C8.99999 14.4477 8.55228 14 7.99999 14C7.44771 14 6.99999 14.4477 6.99999 15C6.99999 15.5523 7.44771 16 7.99999 16ZM16.9997 15C16.9997 15.5523 16.552 16 15.9997 16C15.4475 16 14.9997 15.5523 14.9997 15C14.9997 14.4477 15.4475 14 15.9997 14C16.552 14 16.9997 14.4477 16.9997 15ZM10.75 5C10.3358 5 9.99999 5.33579 9.99999 5.75C9.99999 6.16421 10.3358 6.5 10.75 6.5H13.25C13.6642 6.5 14 6.16421 14 5.75C14 5.33579 13.6642 5 13.25 5H10.75ZM7.74999 2C5.67892 2 3.99999 3.67893 3.99999 5.75V9.5H2.74982C2.3356 9.5 1.99982 9.83579 1.99982 10.25C1.99982 10.6642 2.3356 11 2.74982 11H3.99999V19.75C3.99999 20.7165 4.78349 21.5 5.74999 21.5H7.24999C8.21649 21.5 8.99999 20.7165 8.99999 19.75V18.5H15V19.75C15 20.7165 15.7835 21.5 16.75 21.5H18.25C19.2165 21.5 20 20.7165 20 19.75V11H21.2273C21.6415 11 21.9773 10.6642 21.9773 10.25C21.9773 9.83579 21.6415 9.5 21.2273 9.5H20V5.75C20 3.67893 18.3211 2 16.25 2H7.74999ZM18.5 18.5V19.75C18.5 19.8881 18.3881 20 18.25 20H16.75C16.6119 20 16.5 19.8881 16.5 19.75V18.5H18.5ZM18.5 17H5.49999V13H18.5V17ZM5.49999 19.75V18.5H7.49999V19.75C7.49999 19.8881 7.38806 20 7.24999 20H5.74999C5.61192 20 5.49999 19.8881 5.49999 19.75ZM5.49999 5.75C5.49999 4.50736 6.50735 3.5 7.74999 3.5H16.25C17.4926 3.5 18.5 4.50736 18.5 5.75V11.5H5.49999V5.75Z"
                     fill="currentColor"
                  />
               </svg>
            </navigation-bottom-bar-btn>
            <navigation-bottom-bar-btn [content]="routes[2]">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
               >
                  <path
                     d="M10 2.75C14.0041 2.75 17.25 5.99594 17.25 10C17.25 11.7319 16.6427 13.3219 15.6295 14.5688L20.5303 19.4697C20.8232 19.7626 20.8232 20.2374 20.5303 20.5303C20.2641 20.7966 19.8474 20.8208 19.5538 20.6029L19.4697 20.5303L14.5688 15.6295C13.3219 16.6427 11.7319 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75ZM10 4.25C6.82436 4.25 4.25 6.82436 4.25 10C4.25 13.1756 6.82436 15.75 10 15.75C13.1756 15.75 15.75 13.1756 15.75 10C15.75 6.82436 13.1756 4.25 10 4.25Z"
                     fill="currentColor"
                  />
               </svg>
            </navigation-bottom-bar-btn>
            <navigation-bottom-bar-btn [content]="routes[3]">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
               >
                  <mask
                     id="mask0_6431_7343"
                     maskUnits="userSpaceOnUse"
                     x="2"
                     y="4"
                     width="20"
                     height="16"
                  >
                     <path d="M22 4H2V20H22V4Z" fill="white" />
                  </mask>
                  <g mask="url(#mask0_6431_7343)">
                     <path
                        d="M2.78943 17.8667V6.13332C2.78943 5.39694 3.37852 4.79999 4.10522 4.79999H19.3684C20.0951 4.79999 20.6842 5.39694 20.6842 6.13332V17.8667C20.6842 18.6031 20.0951 19.2 19.3684 19.2H4.10522C3.37852 19.2 2.78943 18.6031 2.78943 17.8667Z"
                        stroke="currentColor"
                        stroke-width="1.5"
                     />
                     <path
                        d="M12.7894 14.6667H5.94731C5.5113 14.6667 5.15784 15.0249 5.15784 15.4667C5.15784 15.9085 5.5113 16.2667 5.94731 16.2667H12.7894C13.2254 16.2667 13.5789 15.9085 13.5789 15.4667C13.5789 15.0249 13.2254 14.6667 12.7894 14.6667Z"
                        fill="currentColor"
                     />
                     <path
                        d="M17 14.6667H15.4211C14.9851 14.6667 14.6316 15.0249 14.6316 15.4667C14.6316 15.9085 14.9851 16.2667 15.4211 16.2667H17C17.436 16.2667 17.7895 15.9085 17.7895 15.4667C17.7895 15.0249 17.436 14.6667 17 14.6667Z"
                        fill="currentColor"
                     />
                     <path
                        d="M10.6842 7.20001H5.94731C5.5113 7.20001 5.15784 7.55818 5.15784 8.00001C5.15784 8.44184 5.5113 8.80001 5.94731 8.80001H10.6842C11.1202 8.80001 11.4736 8.44184 11.4736 8.00001C11.4736 7.55818 11.1202 7.20001 10.6842 7.20001Z"
                        fill="currentColor"
                     />
                  </g>
               </svg>
            </navigation-bottom-bar-btn>
            <navigation-bottom-bar-btn [content]="routes[4]">
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
               >
                  <path
                     d="M9.20313 3.99882L9.25018 3.99756L9.29593 3.99877C9.31837 4.00006 9.34085 4.00239 9.36331 4.0058L9.37939 4.0096C9.4648 4.02332 9.54967 4.05383 9.63057 4.10175L9.68244 4.13529L14.7528 7.70056L19.8198 4.13864C20.2875 3.80985 20.9213 4.10537 20.9942 4.64772L21.0011 4.7522V15.3847C21.0011 15.5941 20.9138 15.7921 20.763 15.9329L20.6824 15.9983L15.1824 19.8647C14.9155 20.0523 14.5946 20.0366 14.3546 19.8878L9.24978 16.2966L4.1801 19.8613C3.71239 20.1901 3.07865 19.8946 3.00571 19.3523L2.99878 19.2478V8.61523C2.99878 8.40591 3.08613 8.20783 3.2369 8.06706L3.31746 8.00167L8.81746 4.13529C8.88146 4.0903 8.94857 4.057 9.01693 4.03442L9.1394 4.00642L9.20313 3.99882ZM19.5011 6.19621L15.5011 9.00812V17.8071L19.5011 14.9952V6.19621ZM8.49878 6.19287L4.49878 9.00478V17.8038L8.49878 14.9918V6.19287ZM10.0011 6.19287V14.9918L14.0011 17.8038V9.00478L10.0011 6.19287Z"
                     fill="currentColor"
                  />
               </svg>
            </navigation-bottom-bar-btn>
         </nav>
      </div>
   `
})
export class BottomBarComponent {
   /**
    * @summary The 'searchModalChange' output property emits events when the search modal's visibility changes.
    *
    * This output property is crucial as it allows parent or sibling components to react to changes in the search modal's visibility.
    *
    * The 'searchModalChange' property is an instance of Angular's EventEmitter. It emits a boolean value indicating whether the search modal should be shown (`true`) or hidden (`false`).
    *
    * Example usages:
    * - This output property is typically used in conjunction with a method that changes the visibility of the search modal, such as 'showSearchModal' or 'hideSearchModal'.
    */
   @Output() searchModalChange = new EventEmitter<boolean>();

   /**
    * @summary The 'routes' property holds an array of navigation items for the bottom bar.
    *
    * This property is important as it defines the navigation items that are displayed in the bottom bar.
    *
    * The 'routes' property is an array of 'PageNavigationItem' objects. Each object represents a navigation item in the bottom bar.
    *
    * Example usages:
    * - This property is typically used in the template of the bottom bar component to generate navigation items.
    */
   routes: PageNavigationItem[] = NAV_ROUTES;

   /**
    * @summary The 'routeIndex' property holds the index of the currently active route.
    *
    * This property is important as it allows the bottom bar component to know which navigation item is currently active.
    *
    * Example usages:
    * - This property is typically used in the template of the bottom bar component to apply a different style to the currently active navigation item.
    */
   selectedItemId!: string;

   /**
    * @summary The 'showSearchModal' method triggers the opening of the search modal.
    *
    *  This method is crucial as it controls the opening of the search modal.
    *
    * The 'showSearchModal' method emits a `true` value through the 'searchModalChange' event emitter.
    * This typically triggers the opening of a search modal in a parent or sibling component that listens to this event.
    *
    * Example usages:
    * - This method is typically used in response to a user action that requires the search modal to be opened, such as clicking on a search button.
    */
   showSearchModal(): void {
      this.searchModalChange.emit(true);
   }

   setSelectedItem(id: string) {
      this.selectedItemId = id;
   }
}
