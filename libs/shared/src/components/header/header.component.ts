import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header } from '../../models/index';

@Component({
   selector: 'shared-header',
   standalone: true,
   imports: [CommonModule],
   template: `
      <div class="header header--{{ variant }}">
         <h2 class="header__title">{{ content.title }}</h2>
         <p class="header__subtitle">{{ content.description }}</p>
      </div>
   `,
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
   /**
    * `placeholder` is a string that represents the placeholder text of the search input.
    * This property is decorated with `@Input()`, which means it's a property that can be set by a parent component.
    * The `!` after `placeholder` is a non-null assertion operator. It tells TypeScript that `placeholder` will always be defined.
    */
   @Input() placeholder!: string;

   /**
    * `content` is an object that represents the content of the header.
    * This property is decorated with `@Input()`, which means it's a property that can be set by a parent component.
    */
   @Input() content!: Header;

   /**
    * `variant` is a string that represents the variant of the header.
    * It can be 'page', 'section', or 'card'.
    * This property is decorated with `@Input()`, which means it's a property that can be set by a parent component.
    * If not provided, it defaults to 'page'.
    */
   @Input() variant: 'page' | 'section' | 'card' = 'page';
}
