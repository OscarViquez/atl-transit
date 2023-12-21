import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrainPageContent } from '../../../shared';
import { HeaderComponent, IconComponent, TileComponent } from '@atl-transit/shared';

@Component({
   selector: 'rya-resource-section',
   standalone: true,
   imports: [CommonModule, HeaderComponent, TileComponent, IconComponent],
   templateUrl: './resource-section.component.html',
   styleUrl: './resource-section.component.scss'
})
export class ResourceSectionComponent {
   @Input() content!: TrainPageContent;
}
