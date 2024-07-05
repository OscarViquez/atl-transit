import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from '@atl-transit/shared';
import { NAV_ROUTES, PageNavigationItem } from '../../shared';
import { PlaceholderIconComponent } from '../placeholder-icon.component';
import { LoadingSkeletonComponent } from '@atl-transit/shared';

@Component({
   selector: 'navigation-sidebar',
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      LogoComponent,
      PlaceholderIconComponent,
      LoadingSkeletonComponent
   ],
   templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   routes: PageNavigationItem[] = NAV_ROUTES;
}
