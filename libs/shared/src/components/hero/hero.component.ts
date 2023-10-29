import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericHeader, Spacing } from '../../models';

@Component({
   selector: 'lib-hero',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './hero.component.html',
   styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
   /*
    Default spacing is 'spacing-default', 
    but can be overridden with other spacing types 
   */
   @Input() content!: GenericHeader;
   @Input() spacing: Spacing = 'spacing-default';
}
