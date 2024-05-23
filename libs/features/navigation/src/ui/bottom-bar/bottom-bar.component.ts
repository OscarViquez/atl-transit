import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NAV_ROUTES, PageNavigationItem } from '../../shared';
import { PlaceholderIconComponent } from '../placeholder-icon.component';
import { LoadingSkeletonComponent } from '@atl-transit/shared';

@Component({
   selector: 'navigation-bottom-bar',
   standalone: true,
   imports: [
      CommonModule,
      RouterModule,
      BottomBarComponent,
      LoadingSkeletonComponent,
      PlaceholderIconComponent
   ],
   templateUrl: './bottom-bar.component.html'
})
export class BottomBarComponent {
   routeIndex!: number;
   customIconColor = '#8E8E93';

   routes: PageNavigationItem[] = NAV_ROUTES;
}
