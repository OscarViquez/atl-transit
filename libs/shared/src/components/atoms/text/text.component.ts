import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface TextVariant {
   header?: Header, 
   text?: Text, 
   weight?: Weight
}

export enum Header {
   H1,
   H2, 
   H3
}

export enum Text {
  T1, 
  T2, 
  T3 
}

export enum Weight {
   BOLD,
   SEMIBOLD,
   REGULAR,
   MEDIUM, 
   LIGHT, 
   XLIGHT
}

@Component({
   selector: 'text',
   standalone: true,
   imports: [CommonModule],
   templateUrl: './text.component.html',
   styleUrls: ['./text.component.scss']
})
export class TextComponent {
   @Input() text!: TextVariant;
   variant = this.text.header !== undefined ? this.text.header : this.text.text;
   weight = this.text.weight;


}
