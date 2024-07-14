import { Component, HostListener } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// TODO: Edit config for scoped packages and libraries
import { SwUpdate } from '@angular/service-worker';
import { BottomBarComponent, SidebarComponent } from './navigation';
import { SearchModalComponent } from './search';
import { SearchBarComponent } from '@atl-transit/shared';
import { TopBarComponent } from './navigation/ui/top-bar/top-bar.component';
@Component({
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      SidebarComponent,
      BottomBarComponent,
      SearchModalComponent,
      SearchBarComponent,
      TopBarComponent
   ],
   selector: 'app-root',
   template: `
      <main
         class="flex flex-col justify-center mx-auto my-auto max-w-[120rem] md:gap-6 md:flex-row"
      >
         <navigation-top-bar />
         <div class="w-full max-w-[12rem] hidden md:block lg:pl-8">
            <navigation-sidebar />
         </div>
         <div class="flex-1 p-6 pt-12 md:p-8 mb-14 mt-10 md:mt-0 xl:max-w-[96rem]">
            <div class="hidden md:block md:mb-10">
               <shared-search-bar
                  [interactive]="true"
                  [placeholder]="'Try Searching Doraville Station'"
               />
               <!-- A bottom search result should appear under the search bar -->
            </div>
            <router-outlet></router-outlet>
         </div>
         <navigation-bottom-bar (searchModalChange)="onModalChangeEvent($event)" />
         <search-modal [openModal]="showSearchModal" (modalChange)="onModalChangeEvent($event)" />
      </main>
   `
})
export class AppComponent {
   /**
    * `showSearchModal` is a boolean property that controls the visibility of the search modal.
    * It is initially set to `false`, meaning the modal is hidden by default.
    */
   showSearchModal = false;

   /**
    * @summary The 'onModalChangeEvent' method updates the visibility of the search modal.
    *
    * __Emphasis:__ Medium emphasis – This method is important as it controls the visibility of the search modal.
    *
    * __Explanation:__ The 'onModalChangeEvent' method is used to update the 'showSearchModal' property based on the passed value.
    * If the value is `true`, the modal will be shown; if the value is `false`, the modal will be hidden.
    *
    * @param value - A boolean indicating whether the modal should be shown (`true`) or hidden (`false`).
    *
    * __Example usages:__
    * - This method is typically used in the context of a component that needs to control the visibility of a modal based on user interactions.
    */
   onModalChangeEvent(value: boolean): void {
      this.showSearchModal = value;
   }

   /**
    * @summary The 'updates' input is an instance of SwUpdate which is used to manage service worker updates.
    *
    * __Emphasis:__ High emphasis – This method is crucial as it controls the update mechanism of the PWA.
    *
    * __Explanation:__ The 'updatePWA' method is used to subscribe to the versionUpdates observable from the SwUpdate instance. When an update is available,
    *  it activates the update and then reloads the page to apply the update.
    *
    * __Example usages:__
    * - Pass an instance of SwUpdate to this method when the app is initialized or at a suitable time to check for updates and apply them.
    */
   updatePWA(updates: SwUpdate) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      updates.versionUpdates.subscribe((event) => {
         updates.activateUpdate().then(() => document.location.reload());
      });
   }

   /**
    * @summary The 'handleKeyDown' method listens for specific key combinations.
    *
    * __Emphasis:__ High emphasis – This method is crucial as it provides a keyboard shortcut for user interactions.
    *
    * __Explanation:__ The 'handleKeyDown' method is used to listen for the 'Command + K' (or 'Ctrl + K' on non-Mac systems) key
    * combination. When this key combination is detected, it logs a message to the console and prevents the default action.
    *
    * __Example usages:__
    * - This method is typically used in the context of a component that needs to provide keyboard shortcuts for user interactions.
    */
   @HostListener('window:keydown', ['$event'])
   handleKeyDown(event: KeyboardEvent) {
      const commandOrCtrl = event.ctrlKey || event.metaKey; // metaKey is for Mac
      const kKey = event.key === 'k' || event.key === 'K';

      if (commandOrCtrl && kKey) {
         console.log('Command + K was pressed');
         event.preventDefault();
      }
   }
}
