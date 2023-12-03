import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericHeader } from '../../../models/index';

type HeaderVariant = 'main' | 'section';

@Component({
   selector: 'rya-header',
   standalone: true,
   imports: [CommonModule],
   template: `
      <div class="header {{ variant }}">
         <h2>{{ content.title }}</h2>
         <p>{{ content.subtitle }}</p>
      </div>
   `,
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   @Input() content!: GenericHeader;
   @Input() variant: HeaderVariant = 'section';
}
