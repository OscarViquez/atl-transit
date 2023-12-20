import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppFacadeService } from '@atl-transit/global-state';
import { SharedService } from '@atl-transit/shared';
import { NavigationComponent, SearchModalComponent } from '@atl-transit/features-ui';
import { SwUpdate } from '@angular/service-worker';
@Component({
   standalone: true,
   imports: [CommonModule, RouterModule, NavigationComponent, SearchModalComponent],
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   constructor(private facade: AppFacadeService, public shared: SharedService) {}

   ngOnInit(): void {
      this.facade.locateUser();
      this.facade.locateStation();
   }

   updatePWA(updates: SwUpdate) {
      // TODO: Add a toast notification to let the user know that the app has been updated
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      updates.versionUpdates.subscribe((event) => {
         updates.activateUpdate().then(() => document.location.reload());
      });
   }
}
