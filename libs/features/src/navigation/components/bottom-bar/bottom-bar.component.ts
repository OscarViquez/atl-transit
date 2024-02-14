import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective, IconPathPipe, LayoutDirective } from '@atl-transit/shared';
import { NavigationItem } from '../../models/interfaces';
import { NAVIGATION_FEATURE_MOCKS } from '../../mocks/mocks';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'rya-bottom-bar',
   standalone: true,
   imports: [CommonModule, ButtonDirective, LayoutDirective, IconPathPipe, BottomBarComponent, RouterModule],
   templateUrl: './bottom-bar.component.html',
   styleUrl: './bottom-bar.component.scss'
})
export class BottomBarComponent {
   content: NavigationItem[] = NAVIGATION_FEATURE_MOCKS.bottomBar;
}
