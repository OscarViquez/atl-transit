import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericHeader, Spacing } from '../../../models';

@Component({
   selector: 'rya-hero',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './hero.component.html',
   styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
   @Input() content!: GenericHeader;
   @Input() spacing: Spacing = 'spacing-default';
}
