import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../../models/index';

type HeaderVariant = 'main' | 'section';

@Component({
   selector: 'rya-header',
   standalone: true,
   imports: [CommonModule],
   template: `
      <div class="header {{ variant }}">
         <h2>{{ content.title }}</h2>
         <p>{{ content.description }}</p>
      </div>
   `,
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   @Input() content!: Header;
   @Input() variant: HeaderVariant = 'section';
}
