import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonProps, ThemeButtonComponent } from '../../atoms';

export interface MenuProps {
   title?: string;
   items: ButtonProps[];
   mode?: string;
   divider?: boolean;
}

@Component({
   selector: 'rya-menu',
   standalone: true,
   imports: [CommonModule, ThemeButtonComponent],
   template: `
      <div [ngClass]="{ 'menu--divider': content.divider }" class="menu {{ content.mode }}">
         <div class="menu__items" *ngFor="let item of content.items">
            <rya-button [props]="item" />
         </div>
      </div>
   `,
   styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
   @Input() content!: MenuProps;
}
