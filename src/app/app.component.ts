import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// TODO: Edit config for scoped packages and libraries
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppFacadeService } from '@atl-transit/data-access';
import { BottomBarComponent, SidebarComponent } from '@atl-transit/features';
import { SwUpdate } from '@angular/service-worker';
@Component({
   standalone: true,
   imports: [CommonModule, RouterModule, SidebarComponent, BottomBarComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor(private facade: AppFacadeService) {}

   ngOnInit(): void {
      this.facade.dispatchAppData();
      this.handleThemeChange();
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
    * @summary The 'handleThemeChange' method determines the theme of the application.
    *
    * __Emphasis:__ High emphasis – This method is crucial as it controls the visual appearance of the application.
    *
    * __Explanation:__ The 'handleThemeChange' method is used to switch between a light and dark theme. It checks the theme stored in localStorage
    * and applies the 'dark' class to the document if the theme is 'dark' or if there is no theme set and the OS preference is 'dark'.
    *
    * __Example usages:__
    * - Call this method when the application is initialized to set the theme based on the user's preference or the OS preference.
    * - Call this method whenever the user changes the theme to apply the new theme.
    */
   handleThemeChange() {
      const theme = localStorage.getItem('theme');
      if (
         theme === 'dark' ||
         (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
      ) {
         document.documentElement.classList.add('dark');
      } else {
         document.documentElement.classList.remove('dark');
      }
   }

   /**
    * @summary The 'setTheme' method sets the theme of the application.
    *
    * __Emphasis:__ High emphasis – This method is crucial as it allows the user to manually set the theme of the application.
    *
    * __Explanation:__ The 'setTheme' method is used to set the theme to 'light' or 'dark'. It stores the theme in localStorage
    *  and then calls 'handleThemeChange' to apply the new theme.
    *
    * __Example usages:__
    * - Call this method with 'light' to set the theme to light.
    * - Call this method with 'dark' to set the theme to dark.
    */
   setTheme(theme: 'light' | 'dark') {
      localStorage.setItem('theme', theme);
      this.handleThemeChange();
   }

   /**
    * @summary The 'respectOSPreference' method makes the application respect the OS theme preference.
    *
    * __Emphasis:__ High emphasis – This method is crucial as it allows the application to automatically adapt to the user's OS theme preference.
    *
    * __Explanation:__ The 'respectOSPreference' method is used to remove the theme from localStorage, which makes the application
    * respect the OS theme preference. It then calls 'handleThemeChange' to apply the new theme.
    *
    * __Example usages:__
    * - Call this method when the user wants the application to automatically adapt to the OS theme preference.
    */
   respectOSPreference() {
      localStorage.removeItem('theme');
      this.handleThemeChange();
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
