import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export enum Type {
   H1 = 'h1',
   H2 = 'h2', 
   H3 = 'h3',
   T1 = 't1', 
   T2 = 't2', 
   T3 = 't3'
}

export enum Weight {
   BOLD = 'bold',
   SEMIBOLD = 'semibold',
   REGULAR = 'regular',
   MEDIUM = 'medium', 
   LIGHT = 'light', 
   XLIGHT = 'x-light'
}

export enum Color {
   GREY = 'grey'
}

@Component({
   selector: 'rya-text',
   standalone: true,
   imports: [CommonModule],
   template: `

   <div class="{{weight}} {{text}} {{color}}" >
      <ng-content select=[text]>
      </ng-content>
   </div>

      `,
   styleUrls: ['./text.component.scss']
})
export class TextComponent {
   @Input() weight!: Weight;
   @Input() text!: Type;
   @Input() color!: Color;


}
