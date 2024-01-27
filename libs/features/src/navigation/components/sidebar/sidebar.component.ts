import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonDirective, CardDirective, IconPathPipe, LayoutDirective } from '@atl-transit/shared';
import { NavigationItem } from '../../models/interfaces';
import { NAVIGATION_FEATURE_MOCKS } from '../../mocks/mocks';

@Component({
   selector: 'rya-sidebar',
   standalone: true,
   imports: [
      CommonModule,
      ButtonDirective,
      CardDirective,
      LayoutDirective,
      IconPathPipe,
      RouterModule
   ],
   templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   /**
    * * Content such as icons, labels, and routes are passed to this component.
    * * via the NAVIGATION_FEATURE_MOCKS object from mocks.ts
    */
   items: NavigationItem[] = NAVIGATION_FEATURE_MOCKS.sidebar;
}
