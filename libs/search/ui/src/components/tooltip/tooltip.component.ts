import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
   selector: 'lib-tooltip',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './tooltip.component.html',
   styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent {}
