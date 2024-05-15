import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LogoComponent } from 'libs/shared/src/icons';
import { PageNavigationItem } from '../../models/interfaces';

@Component({
   selector: 'rya-sidebar',
   standalone: true,
   imports: [CommonModule, RouterModule, LogoComponent],
   templateUrl: './sidebar.component.html',
   styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
   routes: PageNavigationItem[] = [
      {
         icon: 'home',
         label: 'Overview',
         routerLink: '/overview'
      },
      {
         icon: 'trains',
         label: 'Trains',
         routerLink: '/trains'
      },
      {
         icon: 'buses',
         label: 'Buses',
         routerLink: '/buses'
      }
   ];
}
