import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '@atl-transit/shared';

@Component({
   selector: 'rya-footer',
   standalone: true,
   imports: [CommonModule, IconComponent],
   templateUrl: './footer.component.html',
   styleUrls: ['./footer.component.scss']
})
export class FooterComponent {}
