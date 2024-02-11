import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card, CardDirective, LayoutDirective } from '@atl-transit/shared';

@Component({
   selector: 'rya-station-resources',
   standalone: true,
   imports: [CommonModule, CardDirective, LayoutDirective],
   templateUrl: './station-resources.component.html',
   styleUrl: './station-resources.component.scss'
})
export class StationResourcesComponent {
   @Input() content!: Card[];
}
