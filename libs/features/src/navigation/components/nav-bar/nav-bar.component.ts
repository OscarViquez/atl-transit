import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective, SharedService } from '@atl-transit/shared';
import { RouterModule } from '@angular/router';

@Component({
   selector: 'rya-nav-bar',
   standalone: true,
   imports: [CommonModule, RouterModule, ButtonDirective],
   templateUrl: './nav-bar.component.html',
   styleUrl: './nav-bar.component.scss'
})
export class NavBarComponent {
   constructor(public shared: SharedService) {}
}
