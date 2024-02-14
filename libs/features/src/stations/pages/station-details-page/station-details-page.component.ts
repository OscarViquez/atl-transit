/* eslint-disable @nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
   selector: 'rya-station-details-page',
   standalone: true,
   imports: [
      CommonModule
   ],
   templateUrl: './station-details-page.component.html',
   styleUrls: ['./station-details-page.component.scss']
})
export class StationDetailsPageComponent {
}
