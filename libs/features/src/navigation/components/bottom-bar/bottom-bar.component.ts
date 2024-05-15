import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNavigationItem } from '../../models/interfaces';
import {
   BusIconComponent,
   CardIconComponent,
   SearchIconComponent,
   TrainIconComponent
} from 'libs/shared/src/icons';

@Component({
   selector: 'rya-bottom-bar',
   standalone: true,
   imports: [
      CommonModule,
      BottomBarComponent,
      RouterModule,
      TrainIconComponent,
      BusIconComponent,
      SearchIconComponent,
      CardIconComponent
   ],
   templateUrl: './bottom-bar.component.html',
   styleUrl: './bottom-bar.component.scss'
})
export class BottomBarComponent {
   routeIndex!: number;

   routes: PageNavigationItem[] = [
      {
         icon: 'train',
         label: 'Trains',
         routerLink: '/trains'
      },
      {
         icon: 'bus',
         label: 'Buses',
         routerLink: '/buses'
      },
      {
         icon: 'search',
         label: 'Search',
         routerLink: '/overview'
      },
      {
         icon: 'cards',
         label: 'Cards',
         routerLink: '/breezecard'
      }
   ];
}
