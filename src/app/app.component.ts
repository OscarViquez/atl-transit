import { Component, HostListener, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// TODO: Edit config for scoped packages and libraries
// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppFacadeService } from '@atl-transit/data-access';
import { SharedService } from '@atl-transit/shared';
import { NavigationComponent, SearchModalComponent } from '@atl-transit/features-ui';
import { SwUpdate } from '@angular/service-worker';
@Component({
   standalone: true,
   imports: [CommonModule, RouterModule, SearchModalComponent, NavigationComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor(private facade: AppFacadeService, public shared: SharedService) {}

   ngOnInit(): void {
      this.facade.dispatchAppData();
   }

   /**
    * TODO: Add a toast notification to let the user know that the app has been updated
    * * If user downloaded this site as a PWA,
    * * This will update the app when the user refreshes the page.
    */
   updatePWA(updates: SwUpdate) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      updates.versionUpdates.subscribe((event) => {
         updates.activateUpdate().then(() => document.location.reload());
      });
   }

   /**
    * * HostListener listens for events on the window object (browser window).
    * * When the user presses Command + K, the search modal will open.
    */
   @HostListener('window:keydown', ['$event'])
   handleKeyDown(event: KeyboardEvent) {
      const commandOrCtrl = event.ctrlKey || event.metaKey; // metaKey is for Mac
      const kKey = event.key === 'k' || event.key === 'K';

      if (commandOrCtrl && kKey) {
         console.log('Command + K was pressed');
         this.shared.searchModalActive = true;
         event.preventDefault();
      }
   }
}
